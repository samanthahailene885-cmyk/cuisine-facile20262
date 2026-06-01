(function () {
    const FREE_SHIPPING_THRESHOLD = typeof CART_FREE_SHIPPING_THRESHOLD !== 'undefined'
        ? CART_FREE_SHIPPING_THRESHOLD
        : 10000;
    const SHIPPING_FEE = typeof CART_SHIPPING_FEE !== 'undefined'
        ? CART_SHIPPING_FEE
        : 1500;

    function formatCheckoutPrice(amount) {
        return amount.toLocaleString('fr-FR') + ' FCFA';
    }

    function readCart() {
        if (typeof getCart === 'function') {
            return getCart().filter(function (item) {
                return item && item.id && (parseInt(item.quantity, 10) || 0) > 0;
            });
        }
        try {
            const raw = localStorage.getItem('cuisinefacile_cart');
            const parsed = raw ? JSON.parse(raw) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            return [];
        }
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function computeTotals(cartItems) {
        const subtotal = cartItems.reduce(function (sum, item) {
            const qty = parseInt(item.quantity, 10) || 0;
            const price = parseInt(item.price, 10) || 0;
            return sum + qty * price;
        }, 0);
        const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
        return { subtotal: subtotal, shipping: shipping, grandTotal: subtotal + shipping };
    }

    function renderSummary(cartItems) {
        const list = document.getElementById('checkoutSummaryItems');
        const subtotalEl = document.getElementById('checkoutSubtotal');
        const shippingEl = document.getElementById('checkoutShipping');
        const totalEl = document.getElementById('checkoutGrandTotal');
        if (!list) return;

        const totals = computeTotals(cartItems);

        list.innerHTML = cartItems.map(function (item) {
            const qty = parseInt(item.quantity, 10) || 1;
            const lineTotal = (parseInt(item.price, 10) || 0) * qty;
            return '<li class="checkout-summary-item">' +
                '<span class="checkout-summary-item-name">' + escapeHtml(item.name) + ' ×' + qty + '</span>' +
                '<span class="checkout-summary-item-price">' + formatCheckoutPrice(lineTotal) + '</span>' +
                '</li>';
        }).join('');

        if (subtotalEl) subtotalEl.textContent = formatCheckoutPrice(totals.subtotal);
        if (shippingEl) {
            shippingEl.textContent = totals.shipping === 0 && totals.subtotal > 0
                ? 'Gratuite'
                : formatCheckoutPrice(totals.shipping);
            shippingEl.classList.toggle('checkout-shipping-free', totals.shipping === 0 && totals.subtotal > 0);
        }
        if (totalEl) totalEl.textContent = formatCheckoutPrice(totals.grandTotal);
    }

    function setPaymentPanel(method) {
        document.querySelectorAll('[data-payment-panel]').forEach(function (panel) {
            const isActive = panel.dataset.paymentPanel === method;
            panel.hidden = !isActive;
            panel.classList.toggle('checkout-payment-panel--hidden', !isActive);
        });

        const cardFields = ['checkoutCardNumber', 'checkoutCardExpiry', 'checkoutCardCvv'];
        const mobileField = document.getElementById('checkoutMobileNumber');
        const terms = document.getElementById('checkoutTerms');

        cardFields.forEach(function (id) {
            const el = document.getElementById(id);
            if (el) el.required = method === 'card';
        });
        if (mobileField) mobileField.required = method === 'mobile';
        if (terms) terms.required = method === 'cod';
    }

    function bindPaymentToggle() {
        document.querySelectorAll('input[name="paymentMethod"]').forEach(function (radio) {
            radio.addEventListener('change', function () {
                setPaymentPanel(this.value);
            });
        });
        const checked = document.querySelector('input[name="paymentMethod"]:checked');
        setPaymentPanel(checked ? checked.value : 'card');
    }

    function validatePayment(method) {
        if (method === 'card') {
            const num = (document.getElementById('checkoutCardNumber') || {}).value.replace(/\s/g, '');
            const exp = (document.getElementById('checkoutCardExpiry') || {}).value.trim();
            const cvv = (document.getElementById('checkoutCardCvv') || {}).value.trim();
            if (num.length < 13) return 'Veuillez saisir un numéro de carte valide.';
            if (!/^\d{2}\/\d{2}$/.test(exp)) return 'Date d\'expiration invalide (MM/AA).';
            if (cvv.length < 3) return 'Veuillez saisir le code CVV.';
            return '';
        }
        if (method === 'mobile') {
            const mobile = (document.getElementById('checkoutMobileNumber') || {}).value.replace(/\D/g, '');
            if (mobile.length < 8) return 'Veuillez saisir votre numéro Mobile Money.';
            return '';
        }
        if (method === 'cod') {
            const terms = document.getElementById('checkoutTerms');
            if (!terms || !terms.checked) {
                return 'Veuillez accepter les conditions générales de vente.';
            }
            return '';
        }
        return '';
    }

    function bindCardFormatting() {
        const cardInput = document.getElementById('checkoutCardNumber');
        if (cardInput) {
            cardInput.addEventListener('input', function () {
                const digits = this.value.replace(/\D/g, '').slice(0, 16);
                this.value = digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
            });
        }
        const expiryInput = document.getElementById('checkoutCardExpiry');
        if (expiryInput) {
            expiryInput.addEventListener('input', function () {
                let v = this.value.replace(/\D/g, '').slice(0, 4);
                if (v.length >= 2) v = v.slice(0, 2) + '/' + v.slice(2);
                this.value = v;
            });
        }
    }

    function bindFormSubmit(cartItems) {
        const form = document.getElementById('checkoutForm');
        const errorEl = document.getElementById('checkoutFormError');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (errorEl) {
                errorEl.hidden = true;
                errorEl.textContent = '';
            }

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const methodInput = document.querySelector('input[name="paymentMethod"]:checked');
            const method = methodInput ? methodInput.value : 'card';
            const paymentError = validatePayment(method);
            if (paymentError) {
                if (errorEl) {
                    errorEl.textContent = paymentError;
                    errorEl.hidden = false;
                }
                return;
            }

            if (typeof saveCart === 'function') {
                saveCart([]);
            } else {
                localStorage.removeItem('cuisinefacile_cart');
            }
            if (typeof updateCartUI === 'function') {
                updateCartUI();
            }

            alert('Merci ! Votre commande a bien été enregistrée. Nous vous contacterons très bientôt.');
            window.location.href = 'index.html';
        });
    }

    function initCheckoutPage() {
        if (!document.body.classList.contains('page-checkout')) return;

        const cartItems = readCart();
        if (!cartItems.length) {
            window.location.replace('cart.html');
            return;
        }

        renderSummary(cartItems);
        bindPaymentToggle();
        bindCardFormatting();
        bindFormSubmit(cartItems);

        if (typeof updateCartUI === 'function') {
            updateCartUI();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCheckoutPage);
    } else {
        initCheckoutPage();
    }
})();

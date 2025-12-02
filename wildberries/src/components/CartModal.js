import { Element } from './Element.js';

export default class CartModal {
    constructor(cart, onClose) {
        this.cart = cart;
        this.onClose = onClose;
        this.unsubscribe = null;
        this.modalElement = null;
    }

    render() {
        const overlay = Element('div', {
            class: 'modal-overlay',
            onclick: () => this.close()
        });

        const modalContent = Element('div', {
            class: 'cart-modal__content',
            onclick: (e) => e.stopPropagation()
        }, this.renderCartContent());

        this.modalElement = Element('div', { class: 'cart-modal' },
            overlay,
            modalContent
        );

        this.setupCartSubscription();
        return this.modalElement;
    }

    renderCartContent() {
        const cartItems = this.cart.getItems();
        
        const closeButton = Element('button', {
            class: 'cart-modal__close',
            textContent: '×',
            onclick: () => this.close()
        });

        const title = Element('h2', {
            class: 'cart-modal__title',
            textContent: 'Корзина'
        });

        const header = Element('div', { class: 'cart-modal__header' },
            title,
            closeButton
        );

        let itemsList;
        if (cartItems.length === 0) {
            itemsList = Element('div', { 
                class: 'cart-modal__empty',
                textContent: 'Корзина пуста'
            });
        } else {
            const itemElements = cartItems.map(item => this.renderCartItem(item));
            itemsList = Element('div', { class: 'cart-modal__items' }, ...itemElements);
        }

        const totalAmount = Element('div', { class: 'cart-modal__total' },
            Element('span', { 
                class: 'cart-modal__total-label',
                textContent: 'Итого:'
            }),
            Element('span', { 
                class: 'cart-modal__total-amount',
                textContent: `${this.cart.getTotalAmount()} byn`
            })
        );

        const checkoutButton = Element('button', {
            class: 'cart-modal__checkout',
            textContent: 'Оформить заказ',
            disabled: cartItems.length === 0,
            onclick: () => this.handleCheckout()
        });

        const footer = Element('div', { class: 'cart-modal__footer' },
            totalAmount,
            checkoutButton
        );

        return Element('div', { class: 'cart-modal__body' },
            header,
            itemsList,
            footer
        );
    }

    renderCartItem(item) {
        const itemElement = Element('div', { class: 'cart-modal__item' },
            Element('img', {
                class: 'cart-modal__item-image',
                src: item.image,
                alt: item.name
            }),
            
            Element('div', { class: 'cart-modal__item-info' },
                Element('h3', { 
                    class: 'cart-modal__item-name',
                    textContent: item.name
                }),
                Element('div', { class: 'cart-modal__item-price' },
                    Element('span', { 
                        class: 'cart-modal__item-price-current',
                        textContent: `${item.price} byn`
                    })
                )
            ),

            Element('div', { class: 'cart-modal__item-controls' },
                Element('button', {
                    class: 'cart-modal__item-decrease',
                    textContent: '−',
                    onclick: () => this.updateQuantity(item.id, item.quantity - 1)
                }),
                
                Element('span', { 
                    class: 'cart-modal__item-quantity',
                    textContent: item.quantity.toString()
                }),
                
                Element('button', {
                    class: 'cart-modal__item-increase',
                    textContent: '+',
                    onclick: () => this.updateQuantity(item.id, item.quantity + 1)
                })
            ),

            Element('button', {
                class: 'cart-modal__item-remove',
                textContent: '×',
                onclick: () => this.removeItem(item.id)
            })
        );

        return itemElement;
    }

    updateQuantity(productId, quantity) {
        this.cart.updateQuantity(productId, quantity);
    }

    removeItem(productId) {
        this.cart.removeProduct(productId);
    }

    handleCheckout() {
        alert('Заказ оформлен');
        this.close();
    }

    setupCartSubscription() {
        this.unsubscribe = this.cart.subscribe(() => {
            this.updateCartContent();
        });
    }

    updateCartContent() {
        if (this.modalElement) {
            const contentElement = this.modalElement.querySelector('.cart-modal__body');
            if (contentElement) {
                const newContent = this.renderCartContent();
                contentElement.replaceWith(newContent);
            }
        }
    }

    open() {
        if (this.modalElement) {
            this.modalElement.classList.add('cart-modal--open');
            document.body.style.overflow = 'hidden';
        }
    }

    close() {
        if (this.modalElement) {
            this.modalElement.classList.remove('cart-modal--open');
            document.body.style.overflow = '';
        }
        if (this.onClose) {
            this.onClose();
        }
    }

    destroy() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
}
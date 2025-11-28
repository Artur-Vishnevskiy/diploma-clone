import { Element } from './Element.js';

export default class CartWidget {
    constructor(cart, onCartClick) {
        this.cart = cart;
        this.onCartClick = onCartClick;
        this.unsubscribe = null;
        this.countElement = null;
    }

    render() {
        this.countElement = Element('span', {
            class: 'cart-widget__count'
        }, this.cart.getItemCount().toString());

        const iconElement = Element('span', {
            class: 'cart-widget__icon',
            textContent: '🛒'
        });

        const buttonElement = Element('button', {
            class: 'cart-widget__button',
            'aria-label': 'Корзина',
            onclick: (e) => this.onClick(e)
        }, iconElement, this.countElement);

        const widgetElement = Element('div', {
            class: 'cart-widget'
        }, buttonElement);

        this.setupCartSubscription();
        return widgetElement;
    }

    setupCartSubscription() {
        this.unsubscribe = this.cart.subscribe(() => {
            this.update();
        });
    }

    update() {
        if (this.countElement) {
            this.countElement.textContent = this.cart.getItemCount().toString();
        }
    }

    onClick(e) {
        e.preventDefault();
        if (this.onCartClick) {
            this.onCartClick();
        }
    }

    destroy() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
}
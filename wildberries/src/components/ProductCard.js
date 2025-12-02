import { Element } from './Element.js';

export default class ProductCard {
    constructor(product, cart, onQuickView) {
        this.product = product;
        this.cart = cart;
        this.onQuickView = onQuickView;
    }

    render() {
        let discountBadge = null;
        if (this.product.discount) {
            discountBadge = Element('span', {
                class: 'product-card__badge product-card__badge--discount',
                textContent: `-${this.product.discount}%`
            });
        }

        let newBadge = null;
        if (this.product.isNew) {
            newBadge = Element('span', {
                class: 'product-card__badge product-card__badge--new',
                textContent: 'NEW'
            });
        }

        const currentPriceElement = Element('span', {
            class: 'product-card__price product-card__price--current',
            textContent: `${this.product.price} byn`
        });

        let oldPriceElement = null;
        if (this.product.oldPrice) {
            oldPriceElement = Element('span', {
                class: 'product-card__price product-card__price--old',
                textContent: `${this.product.oldPrice} byn`
            });
        }

        const pricesElement = Element('div', { class: 'product-card__prices' },
            currentPriceElement,
            oldPriceElement
        );

        const quickViewButton = Element('button', {
            class: 'product-card__button product-card__button--quick-view',
            textContent: 'Быстрый просмотр',
            onclick: () => {
                if (this.onQuickView) {
                    this.onQuickView(this.product);
                }
            }
        });

        const addToCartButton = Element('button', {
            class: 'product-card__button product-card__button--add-to-cart',
            textContent: 'В корзину',
            onclick: () => this.onAddToCart()
        });

        const imageElement = Element('img', {
            class: 'product-card__img',
            src: this.product.images[0],
            alt: this.product.name
        });

        const imageContainer = Element('div', { class: 'product-card__image' },
            imageElement,
            discountBadge,
            newBadge,
            quickViewButton
        );

        const contentElement = Element('div', { class: 'product-card__content' },
            Element('h3', { class: 'product-card__title', textContent: this.product.name }),
            pricesElement,
            addToCartButton
        );

        const cardElement = Element('div', { class: 'product-card' },
            imageContainer,
            contentElement
        );

        return cardElement;
    }

    onAddToCart() {
        this.cart.addProduct(this.product);
        console.log('Добавлено в корзину:', this.product.name);
    }
}
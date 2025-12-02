import { Element } from './Element.js';

export default class QuickViewModal {
    constructor(cart) {
        this.cart = cart;
        this.product = null;
        this.modalElement = null;
        this.onClose = null;
    }

    render() {
        const overlay = Element('div', {
            class: 'modal-overlay modal-overlay--quickview',
            onclick: () => this.close()
        });

        const modalContent = Element('div', {
            class: 'quickview-modal__content',
            onclick: (e) => e.stopPropagation()
        });

        this.modalElement = Element('div', { class: 'quickview-modal' },
            overlay,
            modalContent
        );

        return this.modalElement;
    }

    renderProductContent(product) {
        this.product = product;

        const closeButton = Element('button', {
            class: 'quickview-modal__close',
            textContent: '×',
            onclick: () => this.close()
        });

        const mainImage = Element('img', {
            class: 'quickview-modal__image',
            src: product.images[0],
            alt: product.name
        });

        const title = Element('h2', {
            class: 'quickview-modal__title',
            textContent: product.name
        });

        const currentPrice = Element('span', {
            class: 'quickview-modal__price quickview-modal__price--current',
            textContent: `${product.price} byn`
        });

        let oldPrice = null;
        if (product.oldPrice) {
            oldPrice = Element('span', {
                class: 'quickview-modal__price quickview-modal__price--old',
                textContent: `${product.oldPrice} byn`
            });
        }

        const pricesContainer = Element('div', { class: 'quickview-modal__prices' },
            currentPrice,
            oldPrice
        );

        const addToCartButton = Element('button', {
            class: 'quickview-modal__button',
            textContent: 'В корзину',
            onclick: () => {
                this.cart.addProduct(product);
                this.close();
            }
        });

        const content = Element('div', { class: 'quickview-modal__body' },
            closeButton,
            mainImage,
            title,
            pricesContainer,
            addToCartButton
        );

        const contentElement = this.modalElement.querySelector('.quickview-modal__content');
        contentElement.innerHTML = '';
        contentElement.appendChild(content);

        return this.modalElement;
    }

    open(product) {
        if (!this.modalElement) {
            this.render();
            document.body.appendChild(this.modalElement);
        }
        
        this.renderProductContent(product);
        this.modalElement.classList.add('quickview-modal--open');
        document.body.style.overflow = 'hidden';
    }

    close() {
        if (this.modalElement) {
            this.modalElement.classList.remove('quickview-modal--open');
            document.body.style.overflow = '';
        }
        if (this.onClose) {
            this.onClose();
        }
    }
}
import { Element } from './Element.js';
import ProductCard from './ProductCard.js';

export default class ProductSlider {
    constructor(products, cart) {
        this.products = products;
        this.cart = cart;
        this.currentSlide = 0;
        this.slidesToShow = 4;
    }

    render() {
        const sliderContainer = Element('div', { class: 'product-slider' },
            this.renderHeader(),
            this.renderSlider(),
            this.renderNavigation()
        );

        this.updateNavigation();
        return sliderContainer;
    }

    renderHeader() {
        return Element('div', { class: 'product-slider__header' },
            Element('h2', { 
                class: 'product-slider__title',
                textContent: 'Хиты продаж'
            })
        );
    }

    renderSlider() {
        const track = Element('div', { class: 'product-slider__track' });
        this.track = track;

        this.products.forEach(product => {
            const productCard = new ProductCard(product, this.cart);
            const slide = Element('div', { class: 'product-slider__slide' },
                productCard.render()
            );
            track.appendChild(slide);
        });

        const viewport = Element('div', { class: 'product-slider__viewport' },
            track
        );

        return viewport;
    }

    renderNavigation() {
        const prevButton = Element('button', {
            class: 'product-slider__nav product-slider__nav--prev',
            onclick: () => this.prevSlide()
        }, '‹');

        const nextButton = Element('button', {
            class: 'product-slider__nav product-slider__nav--next',
            onclick: () => this.nextSlide()
        }, '›');

        this.prevButton = prevButton;
        this.nextButton = nextButton;

        return Element('div', { class: 'product-slider__navigation' },
            prevButton,
            nextButton
        );
    }

    nextSlide() {
        const maxSlide = Math.ceil(this.products.length / this.slidesToShow) - 1;
        if (this.currentSlide < maxSlide) {
            this.currentSlide++;
            this.updateSlider();
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlider();
        }
    }

    updateSlider() {
        if (this.track) {
            const slideWidth = 100 / this.slidesToShow;
            const translateX = -this.currentSlide * slideWidth * this.slidesToShow;
            this.track.style.transform = `translateX(${translateX}%)`;
        }
        this.updateNavigation();
    }

    updateNavigation() {
        const maxSlide = Math.ceil(this.products.length / this.slidesToShow) - 1;
        
        if (this.prevButton) {
            this.prevButton.disabled = this.currentSlide === 0;
        }
        
        if (this.nextButton) {
            this.nextButton.disabled = this.currentSlide >= maxSlide;
        }
    }

    updateProducts(newProducts) {
        this.products = newProducts;
        this.currentSlide = 0;
        
        if (this.track) {
            this.track.innerHTML = '';
            this.products.forEach(product => {
                const productCard = new ProductCard(product, this.cart);
                const slide = Element('div', { class: 'product-slider__slide' },
                    productCard.render()
                );
                this.track.appendChild(slide);
            });
        }
        
        this.updateSlider();
    }
}
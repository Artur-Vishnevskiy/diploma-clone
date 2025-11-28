import { Element } from './Element.js';
import Header from './Header.js';
import ProductCard from './ProductCard.js';
import CartModal from './CartModal.js';

export default class App {
    constructor(cart) {
        this.cart = cart;
        this.components = {};
        this.products = [];
        this.filteredProducts = [];
        this.cartModal = null;
    }

    init(products) {
        this.products = products;
        this.filteredProducts = products;
        
        this.components.header = new Header(
            this.cart, 
            (searchTerm) => this.handleSearch(searchTerm),
            () => this.openCartModal()
        );
        
        this.cartModal = new CartModal(this.cart, () => this.handleCartModalClose());
        
        const modalElement = this.cartModal.render();
        document.body.appendChild(modalElement);
    }

    render() {
        const appElement = Element('div', { class: 'app' },
            this.components.header.render(),
            this.renderMainContent()
        );

        return appElement;
    }

    renderMainContent() {
        const productCards = this.filteredProducts.map(product => {
            const productCard = new ProductCard(product, this.cart);
            return productCard.render();
        });

        const productsGrid = Element('div', { class: 'products-grid' }, ...productCards);

        const sectionTitle = Element('h2', { 
            class: 'section__title',
            textContent: 'Хиты продаж'
        });

        const sectionElement = Element('section', { class: 'section' },
            sectionTitle,
            productsGrid
        );

        const mainElement = Element('main', { class: 'main container' },
            sectionElement
        );

        return mainElement;
    }

    handleSearch(searchTerm) {
        if (!searchTerm) {
            this.filteredProducts = this.products;
        } else {
            this.filteredProducts = this.products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        this.updateProductsDisplay();
    }

    updateProductsDisplay() {
        const mainElement = document.querySelector('.main');
        if (mainElement) {
            const newMainContent = this.renderMainContent();
            mainElement.replaceWith(newMainContent);
        }
    }

    openCartModal() {
        if (this.cartModal) {
            this.cartModal.open();
        }
    }

    handleCartModalClose() {
        console.log('Модальное окно корзины закрыто');
    }
}
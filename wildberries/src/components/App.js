import { Element } from './Element.js';
import Header from './Header.js';
import ProductSlider from './ProductSlider.js';
import ProductCard from './ProductCard.js';
import CartModal from './CartModal.js';
import QuickViewModal from './QuickViewModal.js';

export default class App {
    constructor(cart) {
        this.cart = cart;
        this.components = {};
        this.allProducts = [];
        this.newProducts = [];
        this.otherProducts = [];    
        this.filteredProducts = [];  
        this.cartModal = null;
        this.quickViewModal = null;
        this.productSlider = null;
    }

    init(products) {
        this.allProducts = products;
        
        this.newProducts = products.filter(product => product.isNew);
        this.otherProducts = products.filter(product => !product.isNew);
        this.filteredProducts = [...this.otherProducts];
        
        this.components.header = new Header(
            this.cart, 
            (searchTerm) => this.handleSearch(searchTerm),
            () => this.openCartModal()
        );
        
        this.cartModal = new CartModal(this.cart, () => this.handleCartModalClose());
        this.quickViewModal = new QuickViewModal(this.cart);
        
        this.productSlider = new ProductSlider(
            this.newProducts, 
            this.cart,
            (product) => this.openQuickViewModal(product)
        );
        
        const cartModalElement = this.cartModal.render();
        const quickViewModalElement = this.quickViewModal.render();
        document.body.appendChild(cartModalElement);
        document.body.appendChild(quickViewModalElement);
    }

    render() {
        const appElement = Element('div', { class: 'app' },
            this.components.header.render(),
            this.renderMainContent()
        );

        return appElement;
    }

    renderMainContent() {
        const mainElement = Element('main', { class: 'main container' },
            this.renderNewProductsSlider(),
            this.renderOtherProducts()
        );

        return mainElement;
    }

    renderNewProductsSlider() {
        if (this.newProducts.length === 0) {
            return Element('div');
        }

        const sliderElement = this.productSlider.render();
        
        const newSection = Element('section', { class: 'new-products' },
            sliderElement
        );

        return newSection;
    }

    renderOtherProducts() {
        if (this.filteredProducts.length === 0) {
            const emptyMessage = Element('div', { class: 'empty-message' },
                Element('p', { 
                    textContent: 'Товары не найдены' 
                })
            );
            return emptyMessage;
        }

        const productCards = this.filteredProducts.map(product => {
            const productCard = new ProductCard(product, this.cart, 
                (product) => this.openQuickViewModal(product)
            );
            return productCard.render();
        });

        const productsGrid = Element('div', { class: 'products-grid' }, ...productCards);

        const sectionTitle = Element('h2', { 
            class: 'section__title',
            textContent: 'Товары:'
        });

        const otherSection = Element('section', { class: 'other-products' },
            sectionTitle,
            productsGrid
        );

        return otherSection;
    }

    handleSearch(searchTerm) {
        if (!searchTerm) {
            this.filteredProducts = this.otherProducts;
        } else {
            this.filteredProducts = this.otherProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        this.updateOtherProducts();
    }

    updateOtherProducts() {
        const otherProductsSection = document.querySelector('.other-products');
        if (otherProductsSection) {
            const newSection = this.renderOtherProducts();
            otherProductsSection.replaceWith(newSection);
        }
    }

    openCartModal() {
        if (this.cartModal) {
            this.cartModal.open();
        }
    }

    openQuickViewModal(product) {
        if (this.quickViewModal) {
            this.quickViewModal.open(product);
        }
    }

    handleCartModalClose() {
        console.log('Модальное окно закрыто');
    }
}
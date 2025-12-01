import { Element } from './Element.js';
import Header from './Header.js';
import ProductSlider from './ProductSlider.js';
import ProductCard from './ProductCard.js';
import CartModal from './CartModal.js';

export default class App {
    constructor(cart) {
        this.cart = cart;
        this.components = {};
        this.products = [];
        this.filteredProducts = [];
        this.cartModal = null;
        this.productSlider = null;
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
        this.productSlider = new ProductSlider(this.filteredProducts, this.cart);
        
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
        const sliderElement = this.productSlider.render();

        const mainElement = Element('main', { class: 'main container' },
            sliderElement
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
        
        if (this.productSlider) {
            this.productSlider.updateProducts(this.filteredProducts);
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
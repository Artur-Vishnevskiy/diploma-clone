import { Element } from './Element.js';
import CartWidget from './CartWidget.js';

export default class Header {
    constructor(cart, onSearch, onCartClick) {
        this.cart = cart;
        this.onSearch = onSearch;
        this.onCartClick = onCartClick;
        this.cartWidget = new CartWidget(cart, onCartClick);
        this.searchInput = null;
    }

    render() {
        const logoElement = Element('div', { class: 'header__logo' },
            Element('h1', { class: 'header__title', textContent: 'Wildberries' })
        );

        this.searchInput = Element('input', {
            class: 'header__search-input',
            type: 'text',
            placeholder: 'Поиск...',
            oninput: (e) => this.handleSearch(e)
        });

        const searchElement = Element('div', { class: 'header__search' },
            this.searchInput
        );

        const cartElement = Element('div', { class: 'header__cart' },
            this.cartWidget.render()
        );

        const containerElement = Element('div', { class: 'header__container container' },
            logoElement,
            searchElement,
            cartElement
        );

        const headerElement = Element('header', { class: 'header' }, containerElement);

        return headerElement;
    }

    handleSearch(e) {
        const searchTerm = e.target.value.trim();
        if (this.onSearch) {
            this.onSearch(searchTerm);
        }
    }

    clearSearch() {
        if (this.searchInput) {
            this.searchInput.value = '';
        }
    }
}
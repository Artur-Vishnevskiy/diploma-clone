import App from './components/App.js';
import { Cart } from './services/cart.js';
import { ApiService } from './services/api.js';

class Application {
    constructor() {
        this.cart = new Cart();
        this.api = new ApiService();
        this.app = null;
    }

    async init() {
        try {
            const products = await this.api.getProducts();
            
            this.app = new App(this.cart);
            this.app.init(products);
            
            const appElement = this.app.render();
            document.getElementById('app').appendChild(appElement);
            
        } catch (error) {
            console.error('Ошибка загрузки товаров:', error);
        }
    }
}

const app = new Application();
app.init();
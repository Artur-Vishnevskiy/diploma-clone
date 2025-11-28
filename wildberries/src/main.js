import App from './components/App.js';
import { Cart } from './services/cart.js';

class Application {
    constructor() {
        this.cart = new Cart();
        this.app = null;
    }

    init() {
        const products = [
            {
                id: 1,
                name: "Бритва",
                price: 900,
                oldPrice: 1000,
                discount: 10,
                images: ['/assets/images/products/pants-1.jpg'],
                isNew: false
            },
            {
                id: 2,
                name: "Куртка",
                price: 1200,
                oldPrice: null,
                discount: 0,
                images: ['/assets/images/products/jacket-1.jpg'],
                isNew: true
            },
            {
                id: 3,
                name: "Духи",
                price: 1500,
                oldPrice: 1800,
                discount: 17,
                images: ['/assets/images/products/backpack-1.jpg'],
                isNew: false
            },
            {
                id: 4,
                name: "Джинсы",
                price: 800,
                oldPrice: null,
                discount: 0,
                images: ['/assets/images/products/thermal-1.jpg'],
                isNew: true
            }
        ];

        this.app = new App(this.cart);
        this.app.init(products);
        
        const appElement = this.app.render();
        document.getElementById('app').appendChild(appElement);
        
        console.log('Приложение запущено!');
    }
}

// Запуск приложения
const app = new Application();
app.init();
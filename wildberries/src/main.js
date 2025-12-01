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
                name: "Треккинговые штаны",
                price: 900,
                oldPrice: 1000,
                discount: 10,
                images: ['/assets/images/products/pants-1.jpg'],
                isNew: false
            },
            {
                id: 2,
                name: "Ветровка горная",
                price: 1200,
                oldPrice: null,
                discount: 0,
                images: ['/assets/images/products/jacket-1.jpg'],
                isNew: true
            },
            {
                id: 3,
                name: "Рюкзак походный",
                price: 1500,
                oldPrice: 1800,
                discount: 17,
                images: ['/assets/images/products/backpack-1.jpg'],
                isNew: false
            },
            {
                id: 4,
                name: "Термобелье",
                price: 800,
                oldPrice: null,
                discount: 0,
                images: ['/assets/images/products/thermal-1.jpg'],
                isNew: true
            },
            {
                id: 5,
                name: "Треккинговые ботинки",
                price: 2500,
                oldPrice: 3000,
                discount: 17,
                images: ['/assets/images/products/boots-1.jpg'],
                isNew: false
            },
            {
                id: 6,
                name: "Спальный мешок",
                price: 1800,
                oldPrice: null,
                discount: 0,
                images: ['/assets/images/products/sleeping-bag-1.jpg'],
                isNew: true
            },
            {
                id: 7,
                name: "Палатка 2-местная",
                price: 3500,
                oldPrice: 4000,
                discount: 13,
                images: ['/assets/images/products/tent-1.jpg'],
                isNew: false
            },
            {
                id: 8,
                name: "Фонарь тактический",
                price: 600,
                oldPrice: 800,
                discount: 25,
                images: ['/assets/images/products/flashlight-1.jpg'],
                isNew: false
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
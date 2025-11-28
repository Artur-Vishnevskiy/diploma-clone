const CART_KEY = 'wildberries-cart';

export class StorageService {
    static saveCart(cartData) {
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(cartData));
        } catch (error) {
            console.error('Ошибка сохранения в localStorage', error);
        }
    }

    static getCart() {
        try {
            return JSON.parse(localStorage.getItem(CART_KEY)) || [];
        } catch (error) {
            console.error('Ошибка чтения из localStorage', error);
            return [];
        }
    }

    static clearCart() {
        localStorage.removeItem(CART_KEY);
    }
}
import { StorageService } from './localStorage.js';

export class Cart {
    constructor() {
        this.items = StorageService.getCart();
        this.subscribers = [];
    }
    // Что-то типо подписки как мы делали вместе
    subscribe(callback) {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(cb => cb !== callback);
        };
    }

    notify() {
        this.subscribers.forEach(callback => callback(this.items));
    }

    addProduct(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: 1
            });
        }
        
        this.save();
        this.notify();
        return this.items;
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
        this.notify();
        return this.items;
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeProduct(productId);
            } else {
                this.save();
                this.notify();
            }
        }
        return this.items;
    }

    getItemCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalAmount() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItems() {
        return [...this.items]; 
    }

    clear() {
        this.items = [];
        this.save();
        this.notify();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    save() {
        StorageService.saveCart(this.items);
    }
}
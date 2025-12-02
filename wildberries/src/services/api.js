const API_URL = 'https://692ddfa4e5f67cd80a4d4690.mockapi.io/api/v1/Products'

export class ApiService {
    async getProducts() {
        try {
            const response = await fetch(API_URL);
            const products = await response.json();
            
            return products.map(product => ({
                id: product.id,
                name: product.name || 'Товар',
                price: Number(product.price) || 0,
                oldPrice: product.oldPrice ? Number(product.oldPrice) : null,
                discount: product.discount || 0,
                images: [product.image],
                isNew: product.isNew || false
            }));
            
        } catch (error) {
            console.log('API недоступен');
            return this.getMockProducts();
        }
    }

    getMockProducts() {
        return [
            {
                id: 1,
                name: "Джинсы",
                price: 120,
                oldPrice: 168,
                discount: 40,
                images: ['image1.jpg'],
                isNew: false
            },
            {
                id: 2,
                name: "Ботинки",
                price: 400,
                oldPrice: null,
                discount: 0,
                images: ['image2.jpg'],
                isNew: true
            },
            {
                id: 3,
                name: "Рубашка мужская",
                price: 65,
                oldPrice: 74.75,
                discount: 15,
                images: ['image3.png'],
                isNew: false
            },
            {
                id: 4,
                name: "Куртка",
                price: 450,
                oldPrice: null,
                discount: 0,
                images: ['image4.jpg'],
                isNew: true
            },
            {
                id: 5,
                name: "Куртка",
                price: 450,
                oldPrice: null,
                discount: 0,
                images: ['image4.jpg'],
                isNew: true
            },
            {
                id: 6,
                name: "Куртка",
                price: 450,
                oldPrice: null,
                discount: 0,
                images: ['image4.jpg'],
                isNew: true
            },
            {
                id: 7,
                name: "Куртка",
                price: 450,
                oldPrice: null,
                discount: 0,
                images: ['image4.jpg'],
                isNew: true
            },
            {
                id: 8,
                name: "Куртка",
                price: 450,
                oldPrice: null,
                discount: 0,
                images: ['image4.jpg'],
                isNew: true
            }
        ];
    }
}
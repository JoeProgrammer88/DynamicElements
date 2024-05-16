/** Represents an individual product for sale */
class Product {
    /** The name of the product */
    title: string;

    /** The retail price of the product */
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

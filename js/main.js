class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
window.onload = function () {
    let submitButton = document.querySelector('button[type=submit]');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        let p = getProduct();
        console.log(p);
    });
};
function getProduct() {
    const productTitleTextBox = document.querySelector("#productTitle");
    let title = productTitleTextBox.value;
    const productPriceTextBox = document.querySelector("#productPrice");
    let price = parseFloat(productPriceTextBox.value);
    let p = new Product(title, price);
    return p;
}

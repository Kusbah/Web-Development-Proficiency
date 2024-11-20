interface Product {
    name: string;
    price: number;
}

function totalPriceOfAllProducts(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

function validEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}

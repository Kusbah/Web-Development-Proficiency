/**
 * How It Works:
 * 1. The 'Product' interface specifies the structure of a product.
 * 2. The 'totalPriceOfAllProducts' function takes an array of products as input. It uses the 'reduce' method 
 *    to sum up the prices of all the products in the array.
 * 3. The 'validEmail' function accepts a single string as input.
 * 4. It uses a regular expression 'emailRegex' to check if the input matches the format of a valid email.
 * 5. The function returns 'true' if the input is valid and 'false' otherwise.
 * 
 * How To Run It:
 * 1. Make sure you have Node.js and TypeScript installed on your computer.
 * 2. Save this file as 'product.ts'.
 * 3. Run the generated JavaScript file with Node.js:
 */
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

import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
    const loadProducts = await fetch('products.json')
    const loadCartProduct = await loadProducts.json()

    const cartProduct = getShoppingCart()
    const cartList = [];
    for (const id in cartProduct) {
        const addedCart = loadCartProduct.find(cart => cart.id === id)
        if (addedCart) {
            const quantity = cartProduct[id];
            addedCart.quantity = quantity;
            cartList.push(addedCart)
        }
    }

    return cartList;
}
export default cartProductLoader;
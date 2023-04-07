// use local storage to manage cart data
const addToDb = id => {
    let drinks = getDrinks();
    // add quantity
    const quantity = drinks[id];
    if (!quantity) {
        drinks[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        drinks[id] = newQuantity;
    }
    localStorage.setItem('drinks', JSON.stringify(drinks));
}

const removeFromDb = id => {
    const drinks = getDrinks();
    if (id in drinks) {
        delete drinks[id];
        localStorage.setItem('drinks', JSON.stringify(drinks));
    }
}

const getDrinks = () => {
    let drinks = {};

    //get the shopping cart from local storage
    const storedDrinks = localStorage.getItem('drinks');
    if (storedDrinks) {
        drinks = JSON.parse(storedDrinks);
    }
    return drinks;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getDrinks,
    deleteShoppingCart
}

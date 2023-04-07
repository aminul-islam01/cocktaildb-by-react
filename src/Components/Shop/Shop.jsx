import React, { useEffect, useState } from 'react';
import { addToDb, getDrinks } from '../../Utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Button from 'react-bootstrap/Button';
import { removeFromDb } from '../../Utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // const data = useLoaderData();
    // console.log(data)
    // const products = data.drinks;

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res => res.json())
        .then(data => setProducts(data.drinks))
    }, [])
    useEffect(() => {
        const storedDrinks = getDrinks();
        const saveCard = [];

        for(const id in storedDrinks) {
            const addedProduct = products.find(product => product.idDrink === id);
            if(addedProduct) {
                const quantity = storedDrinks[id];
                addedProduct.quantity = quantity;
                saveCard.push(addedProduct);
            }
        }
        setCart(saveCard)
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd.idDrink === product.idDrink);
        if(!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.idDrink!== product.idDrink);
            newCart = [...remaining, exists];
        }
        setCart(newCart);  
        addToDb(product.idDrink); 
        // console.log(cart)
    }

    const handleDelete = (id) => {
        removeFromDb(id)
        let newCart = [];
        const remaining = cart.filter(pd => pd.idDrink!== id);
        newCart = [...remaining];
        setCart(newCart);
    }
    
    return (
        <div className='row p-0 m-0'>
            <div className='col-md-8 row row-cols-1 row-cols-md-3 g-4 p-0 m-0'>
            {products.map(product => <Product 
            product={product} 
            key={product.idDrink}
            handleAddToCart={handleAddToCart}>
            </Product>)}
          
           <Button variant="primary" className='mx-auto my-4'>See More</Button>
          
            {/* <button className='bg-primary'>See More</button> */}
            </div>
            <div className='col-md-4 bg-secondary mt-4 bg-opacity-25 rounded-3'>
            <div className='position-sticky top-0'>
                <h3 className='text-center py-4 text-danger'>Order Summery</h3>
                <ol>
                    {cart.map(product => <Cart 
                    product={product} 
                    key={product.idDrink}
                    handleDelete={handleDelete}></Cart>)}
                </ol>
            </div>
            </div>
        </div>
    );
};

export default Shop;
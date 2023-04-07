import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
    const { strDrinkThumb, strDrink, strInstructions, idDrink } = product;
    // console.log(product)
    

    return (
        <div className="col">
            <div className="card h-100">
                <img src={strDrinkThumb} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{strDrink}</h5>
                    <p className="card-text">{strInstructions.slice(0, 70)}......</p>
                </div>
                <div className="card-footer border-0 p-0">
                    <button onClick={()=>handleAddToCart(product)} className='w-100 btn btn-primary'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;
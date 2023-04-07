import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

const Cart = ({product, handleDelete}) => {
    const {strDrink, quantity, idDrink} = product;
    return (
        <div>
            <li className='text-start'>
                <div className='row'>
                <span className='col-6'>{strDrink}</span> 
                <span className='col-3'>{quantity}</span>
                <span onClick={()=>handleDelete(idDrink)} className='col-3'><FontAwesomeIcon icon={faTrash} /></span>
                </div>
            </li>
        </div>
    );
};

export default Cart;
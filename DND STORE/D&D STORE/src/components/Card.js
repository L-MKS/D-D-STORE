import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';
import "./Card.css"

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();

    return(
            <div className="smallBox">

                <p className="pName">{children}</p>

                <div className="img">
                    <img className="ProductIMG" src={product.image} alt={product.name_product}/>
                </div>

                <div className='buyDiv'>
                    <p className="price">R$ {product.price.toFixed(2)}</p>
                    <button className="addToCart" onClick={()=>dispatch(cartActions.Add(cart, product))}>Add to cart</button> 
                 </div>

            </div>
    )
}

export default Card;

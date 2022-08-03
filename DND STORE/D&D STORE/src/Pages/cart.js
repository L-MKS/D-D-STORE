import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../components/store/actions/cart.js';
import "./cart.css"

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    let totalPrice = 0;

    for(let i = 0; i < cart.Cart.length; i++) {
        totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity)
    }

    if(cart.value > 0){
        localStorage.setItem('MyCart', JSON.stringify(cart))
    }

    return(
        <div className="InvisibleBox">
            <div className="modal-content">

                <h1 className='title'>MY CART</h1>

                    <div className="modal-body table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                <th className='cols' scope="col"></th>
                                <th className='cols' scope="col">Product</th>
                                <th className='cols' scope="col">Quantity</th>
                                <th className='cols' scope="col">Price</th>
                                <th className='cols' scope="col"></th>
                                <th className='cols' scope="col"></th>
                                <th className='cols' scope="col">Total</th>
                                </tr>
                            </thead>
                        <tbody>
                            {cart.Cart.map( item =>{
                                return(
                                    <tr key={item.id}>
                                        <th className='cols'><button onClick={()=>dispatch(cartActions.DeleteItem(cart, item))} className="remove">X</button></th>
                                        <th className='cols'><img className='cartIMG' src={item.image} alt={item.Name}/></th>
                                        <th className='cols'><span className="badge badge-pill bg-warning">{item.quantity}</span></th>
                                        <th className='cols'>R$ {item.price.toFixed(2)}</th>
                                        <th className='cols'><button onClick={()=>dispatch(cartActions.RemoveItem(cart, item))} className="plus">-</button></th>
                                        <th className='cols'><button onClick={()=>dispatch(cartActions.AddItem(cart, item))} className="minus">+</button></th>
                                        <th className='cols'>R$ {(item.price * item.quantity).toFixed(2)}</th>
                                    </tr>
                                )
                            })}
                                <tr>
                                <th className='cols' colSpan="2" scope="col">Total</th>
                                <th className='cols' colSpan="3">{cart.value} items</th>
                                <th className='cols' colSpan="2">R$ {totalPrice.toFixed(2)}</th>
                                </tr>
                        </tbody>
                            </table>
                    </div>

                    <div className="modal-footer">
                         <button className="checkout">Proceed to checkout</button>
                    </div>

            </div>
        </div>
    )
}

export default Cart;

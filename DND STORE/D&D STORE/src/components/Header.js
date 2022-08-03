import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import "./Header.css"

const Options = () => {
    return(
        <div className='options'>
           
           <img alt="logo" id="logo" src={logo}></img>

           <div className="optionsList">

                <Link to="/">
                    <button className='optionButton'>Who are us?</button>
                </Link>

                <Link to="/Produtos">
                    <button className='optionButton'>Products</button>
                </Link>

                <Link to="/Cart">
                    <button className='optionButton'>My Cart</button>
                </Link>

                <Link to="/contato">
                    <button className='optionButton'>Contact us</button>
                </Link>

            </div>
        
        </div>
    )
}

export default Options;

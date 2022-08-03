import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home.js';
import Contatos from './Pages/Contato.js';
import Welcome from './Pages/welcome.js';
import Cart from './Pages/cart.js';

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/Produtos" element={<HomePage/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/contato" element={<Contatos/>}/>
        </Routes>
    )
}

export default MainRoutes;

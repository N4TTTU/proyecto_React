import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar() {
     return(
         <div className='menuNavBar'>
            <ul>
                <li>
                    <a href="./index.js"> Inicio </a>
                </li>
                <li>
                    <a href="./index.js"> Diseño Web </a>
                </li>
                <li>
                    <a href="./index.js"> Diseño Gráfico </a>
                </li>
                <li>
                    <a href="./index.js"> Streaming </a>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
         </div>
     );
};
import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar() {
     return(
         <div className='menuNavBar'>
            <ul>
                <li>
                    <NavLink to="/">   Inicio   </NavLink>
                </li>
                <li>
                    <NavLink to="/category/diseñoweb">   Diseño web   </NavLink>
                </li>
                <li>
                    <NavLink to="/category/diseñografico">   Diseño gráfico   </NavLink>
                </li>
                <li>
                    <NavLink to="/category/streaming">   Streaming   </NavLink>
                </li>
                <li>
                    <NavLink to="/cart"> <CartWidget /> </NavLink>
                </li>
            </ul>
         </div>
     );
};
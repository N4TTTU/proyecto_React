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
                    <NavLink to="/category/DiseñoWeb">   Diseño web   </NavLink>
                </li>
                <li>
                    <NavLink to="/category/DiseñoGrafico">   Diseño gráfico   </NavLink>
                </li>
                <li>
                    <NavLink to="/category/Streaming">   Streaming   </NavLink>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
         </div>
     );
};
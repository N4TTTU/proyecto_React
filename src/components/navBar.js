import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';
import HDLogo from '../assets/img/HDLogo.png';

export default function NavBar() {
     return(
         <div className='menuNavBar'>
             <div>
                    <Link to="/">
                    <img className='logoHD' src={HDLogo} alt="Logo de HexaDsign" />
                    </Link>
             </div>
             <div>
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
            
         </div>
     );
};
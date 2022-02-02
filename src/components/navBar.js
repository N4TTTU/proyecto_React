import React from 'react';
import ItemListContainer from './ItemListContainer';
import './navBar.css';
import HDLogo from '../assets/img/HDLogo.png'
import CartWidget from './CartWidget';

export default function NavBar() {
    return <div>
            <div className='menuNavBar'>
                    
                    <div>
                        <a href='../index.js' >
                            <img className='logoHD' src={HDLogo} alt='Logo HexaDsign' to="../index.js" />
                        </a>
                    </div>
                    <div>
                        <ul>
                            <li><a href='./index.js'>Inicio</a></li>
                            <li><a href='./index.js'>Diseño Web</a></li>
                            <li><a href='./index.js'>Diseño Gráfico</a></li>
                            <li><a href='./index.js'>Streaming</a></li>
                        </ul>
                    </div>
                <div>
                    
    <CartWidget />
                </div>

                
            </div>
            <div>
                <ItemListContainer name="Pepito" />
            </div>
    </div>
}
import React from 'react';
import './CartWidget.css';
import Carrito from '../assets/img/carrito-png.png'


export default function NavBar() {
    return <div className='carrito-flex'>
                <div className='imagenCarrito'>
                    <a href='../index.js' >
                    <img src={Carrito} alt='Imagen carrito' to="../index.js" />
                    </a>
                </div>
                <div>
                    <p> 0 </p>
                </div>
            </div>
}

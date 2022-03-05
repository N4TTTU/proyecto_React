import React from 'react';
import './Cart';
import Carrito from '../assets/img/carrito-png.png'
import './CartWidget.css'


const CartWidget = () => {
    return (
            <div className='carrito-flex'>
                <div className='imagenCarrito'>
                    <img src={Carrito} alt='Imagen carrito' />
                </div>
            </div>
    );
};

export default CartWidget;
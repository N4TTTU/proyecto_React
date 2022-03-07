import React from 'react';
import './Cart';
import Carrito from '../assets/img/carrito-png.png'
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// const cantidadTotal = cart.reduce((acc, item) => (acc += item.cantidad), 0)
// const CartWidget = () => {
//     return (
//             <div className='carrito-flex'>
//                 <div className='imagenCarrito'>
//                     <img src={Carrito} alt='Imagen carrito' />
//                 </div>
//             </div>
//     );
// };

// export default CartWidget;


const CartWidget = () => {

    const { cart } = useContext(CartContext);

    return(
            <div className='carrito-flex'>
                <div className='imagenCarrito'>
                    <img src={Carrito} alt='Imagen carrito' />
                    {cart.length}
                </div>
            </div>

    )


}

export default CartWidget;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, vaciarCarrito, eliminarItem } = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? (
                <div className='CartTitulo-flex'>
                    <h2>Aún no hay productos, vuelve a inicio</h2>
                    <Link to="/">Inicio</Link>
                </div>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <div className='CartTitulo'>
                                <p>{item.title}</p>
                            </div>
                            <div>
                                <p> Cantidad:</p>
                            </div>
                            <div className='CartEliminarItem'>
                                <button onClick={() => eliminarItem(item.id)}> X </button>
                            </div>
                        </div>
                    ))}
                    <button onClick={vaciarCarrito}>Vaciar mi carrito</button>
                </>
            )}
        </>
    );
};

export default Cart;

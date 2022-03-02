import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { carrito, vaciarCarrito, eliminarItem } = useContext(CartContext);

    return (
        //react.fragment
        <>
            {carrito.length === 0 ? (
                <>
                    <h2>Aún no hay productos, volvé al home</h2>
                    <Link to="/">Home</Link>
                </>
            ) : (
                <>
                    {carrito.map((producto) => (
                        <div key={producto.id}>
                            <p>{producto.name}</p>
                            <p>{producto.cantidad}</p>
                            <button onClick={() => eliminarItem(producto.id)}> X </button>
                        </div>
                    ))}
                    <button onClick={vaciarCarrito}>Vaciar mi carrito</button>
                </>
            )}
        </>
    );
};

export default Cart;

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Cart.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Cart = () => {
    const { cart, vaciarCarrito, eliminarItem, precioTotal } = useContext(CartContext);
    const [user, setUser] = useState('');
    const [mail, setMail] = useState('');
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState('');

    const handleSubmit = (e) => {
            e.preventDefault();
            setLoading(true);
            const userOrder = {
                date: new Date(),
                user: { user, mail },
                items: cart,
                total: precioTotal,
            };
            addDoc(collection(db, 'orders'), userOrder).then((res) => {
                setOrderId(res.id);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
                vaciarCarrito();
            });
        };

        if ( orderId !== '' ) {
            return <p>Compra exitosa! El ID de tu compra es: {orderId} </p>
        }

    return (
        <div className='contenidoCart'>
            {cart.length === 0 ? (
                <div className='cartTitulo-flex'>
                    <h2>Aún no hay productos, vuelve a inicio</h2>
                    <Link to="/">Inicio</Link>
                </div>
            ) : (
                <div>
                    <div className='contenedorTitleIMG'>
                        <p className='tituloCarrito'>Carrito</p>
                        <p></p>
                        <p className='tituloPrecios flex-precios'>Precio</p>
                    </div>
                    <div className='lineaDiv'>
                        <hr></hr>
                    </div>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <div>
                                <div className='contenedorTextos'>
                                    <img src={item.imgUrl} alt={item.title} />
                                    <div className='alineacionTitleEliminar'>
                                        <p className='alineacionTitle'>{item.title}</p>
                                        <div className='cantidadEliminar'>
                                            <p>Cantidad: {item.cantidad}</p>
                                            <button onClick={() => eliminarItem(item.id)}> Eliminar artículo </button>
                                        </div>
                                    </div>
                                    <div className='flex-precios'>
                                        <p>{item.precio} €</p>
                                    </div>
                                </div>
                                <div>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                    ))}
                        <div className='botonVaciarCarrito'>
                            <button onClick={vaciarCarrito}>Vaciar carrito</button>
                            <p></p>
                            <p className='flex-precios'>Total: {precioTotal} €</p>
                        </div>
                        <div>
                        <div>
                            <form onSubmit={handleSubmit} action="">
                                <input onChange={(e) => setUser(e.target.value)} value={user} type="text" placeholder='Nombre' />
                                <input onChange={(e) => setMail(e.target.value)} value={mail} type="email" placeholder='Correo' />
                                <button>
                                    { loading ? 'Estamos procesando tu compra...' : 'Finalizar compra'}
                                </button>
                            </form>
                        </div>
                        </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

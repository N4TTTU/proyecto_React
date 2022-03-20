import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, vaciarCarrito, eliminarItem, precioTotal } = useContext(CartContext);

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
                                <Link to="/checkout">
                                    <button>
                                        Finalizar
                                    </button>
                                </Link>
                            </div>
                        </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

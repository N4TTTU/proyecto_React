import React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const Form = () => {
    
    const [user, setUser] = useState('');
    const [mail, setMail] = useState('');
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState('');
    const { cart, vaciarCarrito, precioTotal } = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const userOrder = {
            date: new Date(),
            user: { user, mail },
            items: cart,
            total: precioTotal(),
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
        return <p>Gracias por tu compra! El ID de tu pedido es: {orderId} </p>
    }



    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input onChange={(e) => setUser(e.target.value)} value={user} type="text" placeholder='Nombre' />
                <input onChange={(e) => setMail(e.target.value)} value={mail} type="email" placeholder='Correo' />
                <button>
                    { loading ? 'Estamos procesando tu compra...' : 'Finalizar compra'}
                </button>
            </form>
        </div>
    );

}



export default Form;
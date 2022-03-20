import React, {useContext, useState} from 'react';
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import { CartContext } from "../context/CartContext";
import './CheckOut.css';
import BuyerDetail from './BuyerDetail';

const CheckOut = () => {
    const { cart, precioTotal, vaciarCarrito} = useContext(CartContext);

    const [user, setUser] = useState('');
    const [mail, setMail] = useState('');
    const [validateMail, setValidateMail] = useState('');
    const [orderKey, setOrderKey] = useState('');
    const [finishButton, setFinishButton] = useState(false);

    const inputUserChange = event => setUser(event.target.value);
    const inputMailChange = event => setMail(event.target.value);
    const inputValidateMail = event => setValidateMail(event.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if( mail === validateMail){
            newOrder();
            vaciarCarrito();
        } else {
            console.log('error, mail no coincide');
        }
    }

    const newOrder = () => {
        const date = new Date();
        const dateToString = date.toString();
        const userOrder = {
            date: dateToString,
            user: { user, mail, validateMail },
            items: cart,
            total: precioTotal,
        };
            
        const buyerOrder = getFirestore();
        const orders = collection(buyerOrder, "orders");
        addDoc(orders, userOrder).then(doc => {
            setOrderKey(doc.id);
            setFinishButton(true)
        }).catch(error => {
            console.log(error);
        });
    }



    return (
        <div>
            { finishButton === true ? (
                <>
                    <BuyerDetail orderKey={orderKey}/>
                </>
            ) : (
            <div>
                <h1> Completar compra </h1>
                <p className="checkout-text">Completa con tus datos para terminar la compra</p>
                <form onSubmit={handleSubmit} className="contenedorCheckOut">
                    <input 
                    name="user" 
                    onChange={ inputUserChange } 
                    value={user} 
                    type="text" 
                    placeholder='Nombre'
                    required />

                    <input 
                    name="mail"
                    onChange={ inputMailChange } 
                    value={mail} 
                    type="email" 
                    placeholder='Correo'
                    required />

                    <input 
                    name="validateMail"
                    onChange={ inputValidateMail } 
                    type="email" 
                    placeholder='Confirmar correo'
                    required />
                <div>
                    <button type='submit'>
                        finalizar
                    </button>
                </div>
                </form>
            </div>
            )}


        </div>
    )

}

export default CheckOut;




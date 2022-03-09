// Ingreso de datos del usuario

import { addDoc, collection } from 'firebase/firestore';
import React, { useState, useContext } from 'react';
import './AddItemContainer.css';
import { db } from '../firebase';
import { CartContext } from '../context/CartContext';

const CheckOut = () => {
    
    const { cart } = useContext(CartContext);

    const itemsCompra = { cart };

    return (
        <div>
            <button onClick={itemsCompra}>    Pagar  </button>  
        </div>
    )

}

export default CheckOut;
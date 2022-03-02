import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


export default function ItemDetail({item}) {
    const [showButton, setShowButton] = useState(false);

    const onAdd = (cantidad) => {
        setShowButton(true);
    };




    return (
        <div>
            <div className='contenedorItemDetail'>
            <div className='itemDetailImg'>
                <img src={item.imgUrl} alt={item.title} />
            </div>
            <div className='itemDetailText'>
                <h1>    {item.title} </h1>
                <p className='itemDetailText-Precio'> {item.precio} €</p>
                <p className='itemDetailText-Description'>     {item.description}   </p>
            </div>
            </div>
            <div className='itemCount-Carrito'>
            {
                showButton ? (
                    <Link to="/cart" className='linkIrCarrito'> Ir al carrito </Link>
                ) : (
                    <ItemCount stock={5} initial={1} onAdd={onAdd} />
                )}
                </div>
        </div>
    );
}
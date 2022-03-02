import React, {useContext, useState} from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';



export default function ItemDetail({item}) {

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
                    <Link to="/cart" className='linkIrCarrito'> Agregar al carrito </Link>
            </div>
        </div>
    );
}

// import './ItemDetail.css';

// export default function ItemDetail({ item }) {

//   return (

//     <div className='item-detail'>

//       <img src={item.pictureUrl} alt="Imagen del producto" />

//       <div className='right-column'>

//         <div className='details'>

//           <h2>{item.title}</h2>

//           <p className='price'>USD {item.price}</p>

//           <p className='description'>{item.description}</p>

//         </div>

//         <button>Comprar</button>

//       </div>
      
//     </div>

//   )
// }
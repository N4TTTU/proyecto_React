import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebase";

export default function ItemDetailContainer() {
    const [item, setItem] = useState();
    const { itemId } = useParams();
  
    useEffect(() => {
  
      const itemReferencia = doc(db, "items", itemId);

      
      getDoc(itemReferencia).then((snapshot) => {
        
        if(snapshot.exists()) {

          setItem({ id: snapshot.id, ...snapshot.data()})
        }
      }).catch(error => {
        console.log(error)
      })
  
    }, [itemId]);
  
    return (
      <div className='item-detail-container'>
        {!item ? <p>Cargando producto...</p> :  <ItemDetail item={item} />}
      </div>
    )
  };
 
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getItems } from './api/api';
import { useParams } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
import ItemCount from './ItemCount';

export default function ItemListContainer({ greetings }) {
  const [itemsList, setItemsList] = useState([]);
  const { nombreCategoria } = useParams();


  useEffect(() => {
    getItems().then((items) => {
      if (!nombreCategoria ) {
        setItemsList(items);
      } else {
        const itemsPorCategoria = items.filter((producto) => {
          return producto.category === nombreCategoria;
        });

        setItemsList(itemsPorCategoria);
      }
    }).catch((error) => {
      console.log(error);
    });

  }, [nombreCategoria]);

  useEffect(() => {
    
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then(snapshot => {

      const products =  snapshot.docs.map( (doc) =>  ({ id: doc.id, ...doc.data() }))
      console.log(products)
      
    }).catch(error => {

      console.log(error)

    })


  }, []);

  function onAddItem(itemCount) {
    console.log(itemCount);
  }

  return (
    <div>
      <h1>{greetings}</h1>

      {
        itemsList.length === 0 ? 
          <p>Cargando productos...</p> : 
          <ItemList items={itemsList} />
      }

      <ItemCount stock={5} initial={1} onAdd={onAddItem} />
    </div>
  )
}



// export default function ItemListContainer({greetings}) {

//     const[products, setProducts] = useState([]);
//     const { itemCategory } = useParams();

//     useEffect(() => {
//         getProducts().then(function(products) {
//             if (!itemCategory) {
//                 setProducts(products);
//             } else {
                
//             const itemsCategoria = products.filter((producto) => {
//                 return producto.category === itemCategory;
//             });

//             setProducts(itemsCategoria);
//             }
//         }).catch((error) => {
//                 console.log(error);
//             });

//         }, [itemCategory]);

//         useEffect(() => {

//             getDocs(collection(db, "items")).then(snapshot => {
//                 const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
//                 console.log(products);
//             }).catch(error => {
//                 console.log(error);
//             })

//         })



//     return (
//         <div>
//             <p className='bienvenida'> { greetings } </p>
//             { products.length > 0 ? <ItemList /> : <p>Cargando...</p>}
//         </div>
//     );
// };



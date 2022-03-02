import './ItemListContainer.css';

import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { getProducts } from './api/api';
import { useParams } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';


export default function ItemListContainer({greetings}) {

    const[products, setProducts] = useState([]);
    const { itemCategory } = useParams();

    useEffect(() => {
        getProducts().then(function(products) {
            if (!itemCategory) {
                setProducts(products);
            } else {
                
            const itemsCategoria = products.filter((producto) => {
                return producto.category === itemCategory;
            });

            setProducts(itemsCategoria);
            }
        }).catch((error) => {
                console.log(error);
            });

        }, [itemCategory]);

        useEffect(() => {

            getDocs(collection(db, "items")).then(snapshot => {
                const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                console.log(products);
            }).catch(error => {
                console.log(error);
            })

        })



    return (
        <div>
            <p className='bienvenida'> { greetings } </p>
            { products.length > 0 ? <ItemList products={products} /> : <p>Cargando...</p>}
        </div>
    );
}
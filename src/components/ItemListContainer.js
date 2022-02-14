import './ItemListContainer.css';

import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { getProducts } from './api/api';
import { useParams } from 'react-router-dom';


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

    function onAdd(itemCount) {
        console.log(itemCount);
    }

    return (
        <div>
            <p className='bienvenida'> { greetings } </p>
            { products.length > 0 ? <ItemList products={products} /> : <p>Cargando...</p>}
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    );
}
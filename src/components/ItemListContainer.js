import './ItemListContainer.css';

import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { getProducts } from './api/api';


export default function ItemListContainer({greetings}) {

    const[products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(function(products) {
                console.log(products);

                setProducts(products);
            });
        }, []);

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
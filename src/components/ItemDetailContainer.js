import { useEffect, useState } from 'react';
import { getProducts } from './api/api';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer () {
    const [item, setItem] = useState();


    useEffect(() => {

        const productID = 1;

        getProducts().then((items) => {
            const item = items.find((i) => i.id === productID);
            setItem(item);
        }).catch((error) => {
            console.log(error);
        })
    }, []);


return (
        <div className='container-ItemDetailContainer'>
            {!item ? <p> Cargando... </p> : <ItemDetail item={item} />}
        </div>
    );
}
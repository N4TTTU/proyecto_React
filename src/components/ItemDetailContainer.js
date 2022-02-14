import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from './api/api';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer () {
    const [item, setItem] = useState();
    const { itemId } = useParams();


    useEffect(() => {

        getProducts().then((items) => {
            const item = items.find((i) => {
                return i.id.toString() === itemId
            });
            setItem(item);
        }).catch((error) => {
            console.log(error);
        })
    }, [itemId]);


return (
        <div className='container-ItemDetailContainer'>
            {!item ? <p> Cargando... </p> : <ItemDetail item={item} />}
        </div>
    );
}
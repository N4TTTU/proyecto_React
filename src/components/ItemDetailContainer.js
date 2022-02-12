/*

1 - Ir a buscar con el getItems la lista de productos
2 - Filtrar 1 producto (cualquiera)
3 - Guardar en un estado propio ese producto
4 - Pasarle ese producto al componente ItemDetail.js

*/

import { useEffect } from 'react';
import { getItems } from './api/api';

export default function ItemDetailContainer () {


    useEffect(() => {

        getItems().then((items) => {
            const item = items.find((i) => i.id === 1);
            // Este item lo guarda en un estado.
        }) 

    }, []);

}
import './ItemListContainer.css';
import ItemCount from './ItemCount';


function ItemListContainer({name}) {
    return (
        <div className="contenedorItemListContainer">
            <ItemCount />
        </div>
    )
};

export default ItemListContainer;
import './Item.css';
import { Link } from 'react-router-dom';


function Item({ item }){

    return (
            <div className='contenedor-items' >
                <Link  style={{textDecoration: 'none', color: '#3c3c3c'}} to={`/producto/${item.id}`}>
                    <div className='contenedorItemImg'>
                        <img src={ item.imgUrl } alt='Imagen del producto' />
                    </div>
                    <div>
                        <p className='title' > { item.title }    </p>
                        <p className='price' >  Precio: { item.precio } €  </p>
                    </div>
                </Link>
            </div>
    );
}

export default Item;
import './Item.css';
import { Link } from 'react-router-dom';


export default function Item({item}){

    return (
            <div className='contenedor-items' >
                <Link to={`/producto/${item.id}`}>
                    <img src={item.imgUrl} alt='Imagen del producto' />
                    <p className='title' > {   item.title }    </p>
                    <p className='price' >  Precio: {item.precio} €  </p>
                </Link>
            </div>
    );
}
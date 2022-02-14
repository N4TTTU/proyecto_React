import './Item.css';

export default function Item({item}){

    return (
    <div className='contenedor-items' >
        <img src={item.imgUrl} alt='Imagen del producto' />
        <p className='price' >  Precio: {item.precio} €  </p>
        <p className='title' > {   item.title }    </p>
    </div>
    )
}
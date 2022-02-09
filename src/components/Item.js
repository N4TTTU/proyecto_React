import './Item.css';

export default function Item({item}){

    return (
    <div>
        <img src={item.imgUrl} alt='Imagen del producto' />
        <p className='price' >  {item.precio}   </p>
        <p className='title' > {   item.title }    </p>
    </div>
    )
}
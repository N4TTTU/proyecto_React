import './ItemDetail.css';


export default function ItemDetail({item}) {
    return (
        <div className='contenedorItemDetail'>
            <div className='itemDetailImg'>
                <img src={item.imgUrl} alt='Imagen del producto' />
            </div>
            <div className='itemDetailText'>
                <h1>    {item.title} </h1>
                <p className='itemDetailText-Precio'> {item.precio} €</p>
                <p className='itemDetailText-Description'>     {item.description}   </p>
            </div>
        </div>
    );
}
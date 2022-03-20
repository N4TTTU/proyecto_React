import './BuyerDetail.css';

const BuyerDetail = ({orderKey}) => {
    return (
        <div>
            {!orderKey ? <p>Cargando pedido...</p> : 
            <div>
            <h1> Orden Terminada! </h1>
            <p> GRacias por comprar en HexaDsign.</p>
            <p> Numero de orden: {orderKey} </p>
            </div>
            }
        </div>
    )
}



export default BuyerDetail;
import React, {useState} from "react";
import './ItemCount.css';

function ItemCount({ stock, onAdd}) {
    const [itemsNumber, setItemsNumber] = useState(1);


    // function sumar() {
    //     if (itemsNumber < stock) {
    //         setItemsNumber(itemsNumber + 1);
    //         console.log("+1");
    //     }
    // }


    function sumar() {
        if (itemsNumber < stock)
        setItemsNumber(itemsNumber + 1);
        console.log("+1!!")
    }

    function restar() {
        if (itemsNumber > 0) {
            setItemsNumber(itemsNumber - 1);
        }
    }

    const agregarAlCarrito = () => {
        onAdd(itemsNumber);
    }

    return (
        <div className="contenedor-contador">
                <div className="botonMasMenos">
                    <div>
                        <button onClick={restar} className="botonMenos">    -    </button>
                    </div>
                    <div>  
                        <p> { itemsNumber }  </p> 
                    </div>
                    <div>
                        <button onClick={sumar} className="botonMas">    +    </button>
                    </div>
                </div>
                <div className="botonAgregarAlCarrito">
                    <button disabled={itemsNumber === 0} onClick={agregarAlCarrito}>    Agregar al carrito  </button>
                </div>
            </div>
    );

};

export default ItemCount;

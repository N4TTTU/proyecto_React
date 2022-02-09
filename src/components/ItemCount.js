import React, {useState} from "react";
import './ItemCount.css';

export default function ItemCount({ stock, initial, onAdd}) {
    const [contadorItems, setContadorItems] = useState(initial);

    function sumar() {
        if (contadorItems < stock) {
            setContadorItems(contadorItems + 1);
        }
    }

    function restar() {
        if (contadorItems > 1) {
            setContadorItems(contadorItems - 1);
        }
    }

    function agregarCarrito() {
        onAdd(contadorItems);
    }

    return (
        <div className="contenedor-contador">
                <div className="nombreItem">
                    <p> Paquete streaming</p>
                </div>
                <div className="botonMasMenos">
                    <div>
                        <button onClick={restar} className="botonMenos">    -    </button>
                    </div>
                    <div>  
                        <p> { contadorItems }  </p> 
                    </div>
                    <div>
                        <button onClick={sumar} className="botonMas">    +    </button>
                    </div>
                </div>
                <div className="botonAgregarAlCarrito">
                    <button onClick={agregarCarrito}>    Agregar al carrito  </button>
                </div>
            </div>
    )

}
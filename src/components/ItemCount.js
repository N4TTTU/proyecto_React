import React, {useState} from "react";
import './ItemCount.css';

export default function Button() {
    
    const [contador, setContador] = useState (0);

    function sumar() {
        setContador(contador + 1);
    }

    function restar() {
        setContador(contador - 1);
    }

    return <div className="contenedor-contador">
                <div className="nombreItem">
                    <p> Paquete streaming</p>
                </div>
                <div className="botonMasMenos">
                    <div>
                        <button onClick={restar} className="botonMenos">    -    </button>
                    </div>
                    <div>  
                        <p> { contador }  </p> 
                    </div>
                    <div>
                        <button onClick={sumar} className="botonMas">    +    </button>
                    </div>
                </div>
                <div className="botonAgregarAlCarrito">
                    <button>    Agregar al carrito  </button>
                </div>
            </div>
}

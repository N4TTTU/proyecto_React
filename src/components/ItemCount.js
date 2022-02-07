import React, {useState} from "react";
import './ItemCount.css';


export default function Button() {


    let stockMin = 0;
    let stockMax = 5;
    
    const [contador, setContador] = useState (0);

    function sumar() {
        if (contador < stockMax) {
            setContador(contador + 1);
        } else {
            setContador(5);
        }
    }

    function restar() {
        if (contador > stockMin){
        setContador(contador - 1);
    } else {
        ;
    }
}
    function onAdd() {
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
                    <button onClick={() => onAdd(contador)}>    Agregar al carrito  </button>
                </div>
            </div>
}


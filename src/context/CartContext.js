import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (cantidad, item) => {
        if (itemsEnElCarrito(item.id)) {
            sumarAlCarrito(cantidad, item);
        } else {
            setCarrito([...carrito, { ...item, cantidad }]);
        }
    };

    const itemsEnElCarrito = (id) => {
        const respuesta = carrito.some((prod) => prod.id === id);
        return respuesta;
    };

    const sumarAlCarrito = (cantidad, item) => {
        const copia = [...carrito];
        copia.forEach((producto) => {
            if (producto.id === item.id) {
                producto.cantidad += cantidad;
            }
        });
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const deleteItem = (id) => {
        setCarrito(carrito.filter((producto) => producto.id !== id));
    };


    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, deleteItem }} >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
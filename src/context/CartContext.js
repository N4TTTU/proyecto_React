import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    

    const addToCart = (itemsNumber, item) => {
        if (isOnCart(item.id)) {
            sumarCantidad(itemsNumber, item);
        } else {
            setCart([...cart, { ...item, cantidad : itemsNumber}]);
        }
    };

    const isOnCart = (id) => {
        const respuesta = cart.some((prod) => prod.id === id);
        return respuesta;
    };

    const sumarCantidad = (cantidad, item) => {

        const copia = [...cart];
        copia.forEach((producto) => {
          if (producto.id === item.id) {
            producto.cantidad += cantidad;
          }
        });
    setCart(copia);
      };

    const vaciarCarrito = () => {
        setCart([]);
    };

    const deleteItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id));
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, vaciarCarrito, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};


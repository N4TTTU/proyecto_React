import './App.css';
import { Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import { CartContext } from './context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Error from './components/Error';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/CartContext';


function App(){
    return (
                <CartContext.Provider>
                    <BrowserRouter>
                        <NavBar />
                        <Routes> 
                            <Route path="/" element={ <ItemListContainer greetings="Bienvenido a HexaDsign" />  } />
                            <Route path="/category/:nombreCategoria" element={ <ItemListContainer greetings="Categorías" />  }  />
                            <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
                            <Route path="*" element={<Error />} />
                            <Route path='/cart' element={<CartContext/>} />
                        </Routes>
                    </BrowserRouter>
                </CartContext.Provider>
    );
}


export default App;

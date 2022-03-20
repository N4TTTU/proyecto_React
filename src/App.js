import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from './context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Error from './components/Error';
import AddItemContainer from './components/AddItemContainer';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';


function App(){
    return (
                <CartProvider>
                    <BrowserRouter>
                        <NavBar />
                        <Routes> 
                            
                            <Route path="/" element={ <ItemListContainer greetings="Bienvenido a HexaDsign" />  } />
                            <Route path="/category/:nombreCategoria" element={ <ItemListContainer greetings="Categoría de productos" />  }  />
                            <Route path="/producto/:itemId" element={<ItemDetailContainer greetings="Categoría en específico" />} />
                            <Route path='/additem' element={<AddItemContainer />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path="*" element={<Error />} />
                            <Route path='/checkout' element={<CheckOut />} />
                        </Routes>
                    </BrowserRouter>
                </CartProvider>
    );
}

export default App;


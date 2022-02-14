import './App.css';
import { Routes, Route, Link} from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Error from './components/Error';

import HDLogo from './assets/img/HDLogo.png';
import ItemDetailContainer from './components/ItemDetailContainer';

function App(){
    return (
            <div className='contenedor-principal-menu'>
                <header>
                <div>
                    <Link to="/">
                    <img className='logoHD' src={HDLogo} alt="Logo de HexaDsign" />
                    </Link>
                </div>
                <div>
                        <NavBar />
                </div>
                </header>

                <main>
                    <div>
                        <Routes> 
                            <Route path="/" element={ <ItemListContainer greetings="Bienvenido a HexaDsign" />  } />
                            <Route path="/category/:itemCategory" element={ <ItemListContainer greetings="Categorías" />  }  />
                            <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </main>
            </div>
    );
}


export default App;

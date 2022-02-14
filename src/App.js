import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import HDLogo from './assets/img/HDLogo.png';
import ItemDetailContainer from './components/ItemDetailContainer';


function App(){
    return (
        <div className='contenedor-principal-menu'>
            <header>
              <div>
                  <img className='logoHD' src={HDLogo} alt="Logo de HexaDsign" />
              </div>
              <div>
                    <NavBar />
              </div>
            </header>
            <main>
                <div>
                    <ItemListContainer greetings="Bienvenido a HexaDsign" />
                </div>
                <div>
                    <ItemDetailContainer />
                </div>
            </main>
        </div>
    );
}


export default App;

//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import Footer from  './components/footer';
import Navbar from  './components/navbar';
import ItemListContainer from  './components/itemlistcontainer';
//import ItemCount from  './components/itemcount';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer/>        
      </header>      
      <Footer mensaje="Creado por Martha Sánchez"/>
    </div>    
  );
}

export default App;

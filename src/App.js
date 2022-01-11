import logo from './logo.svg';
import './App.css';
import Footer from  './components/footer';
import Navbar from  './components/navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <p>
          Mi primera tienda en React T_T
        </p>
        
      </header>
      
      <Footer mensaje="Creado por Martha Sánchez"/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
// import Login from "./Components/Navbar/Login";
// import { Routes, Route } from "react-router-dom"
// import footer from "./Footer/Footer"
import Footer from './Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Store from './Store';
import Watchs from "./Components/Watchs"
// import Product from './Components/Product';
import DigitalAudio from './Components/DigitalAudio/DigitalAudio';

// import Store from './Store'
function App() {
  return (
    <div className="App">

      <Navbar/>
      {/* <Product /> */}
      <DigitalAudio />
      <Routes>
        <Route path='/Store' element={<Store/>} />
        <Route path='/Guide' element={<h1>Cart</h1>} />
        <Route path='/Contact' element={<h1>Cart</h1>} />
        <Route path='/Pin' element={<h1>Cart</h1>} />
        <Route path='/Cart' element={<h1>Cart</h1>} />
        <Route path='/Login' element={<h1>Cart</h1>} />

      </Routes>
      <hr/>


      <Watchs/>
      <Footer />
     
       
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
// import Login from "./Components/Navbar/Login";
// import { Routes, Route } from "react-router-dom"
// import footer from "./Footer/Footer"
import First from "./Components/First"
import Footer from './Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Store from './Store';
import Watchs from "./Components/Watchs"
// import Product from './Components/Product';
import DigitalAudio from './Components/DigitalAudio/DigitalAudio';
import Leds from"./Components/Leds"
import Electronics from './Components/Electronics';
import Ipad from "./Components/Ipad"
import Iphones from './Components/Iphones';
import Monitors from './Components/Monitors';
import Kodaks from './Components/Kodaks';
import Storages from './Components/Storages';
import Explores from './Components/Explores';
import Contact from './Contact';
// import Store from './Store'
function App() {
  return (
    <div className="App">

      <Navbar/>
      <First />
      {/* <Product /> */}
      <DigitalAudio />
      <Routes>
        <Route path='/Store' element={<Store/>} />
        <Route path='/Guide' element={<Contact/>} />
        <Route path='/Contact' element={<h1>Cart</h1>} />
        <Route path='/Pin' element={<h1>Cart</h1>} />
        <Route path='/Cart' element={<h1>Cart</h1>} />
        <Route path='/Login' element={<h1>Cart</h1>} />

      </Routes>
      <hr/>

        <Leds />
        <hr />
        <Electronics />
        <hr />
      
     
      <Ipad />
      <hr/>
      <Iphones />
      <hr/>
      <Monitors />
      <hr/>
      <Watchs/>
      <hr/>
      <Kodaks />
      <hr />
      <Storages />
      <hr />
      <Explores /> 
      <Footer />
     
       
    </div>
  );
}

export default App;

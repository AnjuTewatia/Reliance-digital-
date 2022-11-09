import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
// import Login from "./Components/Navbar/Login";
// import { Routes, Route } from "react-router-dom"
// import footer from "./Footer/Footer"
import Footer from './Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Store from './Store';
// import Store from './Store'
function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/Store' element={<Store/>} />
        <Route path='/Guide' element={<h1>Cart</h1>} />
        <Route path='/Contact' element={<h1>Cart</h1>} />
        <Route path='/Pin' element={<h1>Cart</h1>} />
        <Route path='/Cart' element={<h1>Cart</h1>} />
        <Route path='/Login' element={<h1>Cart</h1>} />

      </Routes>

      <Footer />
       
    </div>
  );
}

export default App;

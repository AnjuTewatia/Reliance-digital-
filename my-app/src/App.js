import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';

import Footer from './Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Nav from "./Components/Nav"
//  import Store from './Store';
import Contact from './Contact';
import Store from "./Components/Home/Store"
import Home from './Components/Home/Home';
import Login from './Components/Home/Login';
import Error from './Components/Home/Error';
import Logins from "./Components/Home/Logins"
import Pin from './Components/Home/Pin'


function App() {
  return (
    <div className="App">

<Navbar/>
<Nav />
      <Routes>
        
        <Route path='/'  element={<Home/>} />
        <Route path='/Store'  element={<Store/>} />
        <Route path='/Guide' element={<Contact/>} />
        <Route path='/Contact' element={<h1>Cart</h1>} />
        <Route path='/Pin' element={<Pin/>} />
        <Route path='/Cart' element={<h1>Cart</h1>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Logins' element={<Logins />} />
        <Route path='*' element={<Error/>} />

      </Routes> 
     
     
            <Footer />
    
       
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';

import Footer from './Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Nav from "./Components/Nav"
//  import Store from './Store';
import Guide from './Guide';
import Store from "./Components/Home/Store"
import Home from './Components/Home/Home';
import Login from './Components/Home/Login';
import Error from './Components/Home/Error';
import Logins from "./Components/Home/Logins"
import Contact from './Contact';
import Pin from './Components/Home/Pin'
import Down from './Components/Navbar/Down';

function App() {
  return (
    <div className="App">

<Navbar/>
<Nav />
<Down/>
      <Routes>
        
        <Route path='/'  element={<Home/>} />
        <Route path='/Store'  element={<Store/>} />
        <Route path='/Guide' element={<Guide/>} />
        <Route path='/Contact' element={<Contact/>} />
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

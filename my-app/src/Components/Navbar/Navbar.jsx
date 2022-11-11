import React from 'react'
import { Input ,Stack} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from "../../Images/logo.png"

const  Navbar = () => {
  return(
    <div className='navbar'>
<div><img src={logo} alt='logo' /></div>
<Stack spacing={3}>
  <Input placeholder='Find your favorite products' size='xs' style={{margin:"40px",width:"250px"}} />
 
</Stack>
<div className='navbarr'>
    <NavLink to='/Store'>Find a Store</NavLink>
    <NavLink to='/Guide'>Buying Guides</NavLink>
    <NavLink to='/Contact'>Contact Us</NavLink>
    <NavLink to='/Pin'>Select Your PIN Code</NavLink>
    <NavLink to='/Cart'>Cart</NavLink>
    <NavLink to='/Login'>Login</NavLink>
</div>
    </div>
  )
}

export default Navbar;
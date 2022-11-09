import React from 'react'
import { Input ,Stack} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const  Navbar = () => {
  return(
    <div className='navbar'>
<div><img src="https://drive.google.com/file/d/1W_2rZIGP8vRW1NzhyW_xC4DulJUyfxZL/view?usp=share_link" alt='logo' /></div>
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
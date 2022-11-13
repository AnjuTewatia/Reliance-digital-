

import React from 'react'
import { useState } from 'react'
import { Link, useNavigate ,NavLink} from "react-router-dom";

const Logins = () => {

  const[pin,setPin]=useState("");
  const [loading, setLoading] = useState(false);
const navigate=useNavigate();
  

  const handleSubmit= (e) =>{
    e.preventDefault();
    setLoading(true)
    alert("login successfull")


  }


  return (
    <div>
      <form action="" style={{width:"400px",height:"100px",margin:"50px 0px 50px 500px",boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
       <div>
        <lable >
        <h2 style={{backgroundColor:"blue",marginBottom:"30px" }} >Login</h2>
        <input  
        value={pin} 
        onChange={(e) => setPin(e.target.value)}
         type="number" placeholder="Enter Your mobile number"/>
        </lable>
        {/* <NavLink to="/"> */}
        <button data-testid="form-submit" type="submit">
          <NavLink to='/'>

          Procced
          </NavLink>
          
          </button>
        {/* </NavLink> */}
        </div>
      </form>
    </div>
  )
}

export default Logins
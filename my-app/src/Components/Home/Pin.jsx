



import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";







const Pin = () => {

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
      <form action="" style={{width:"400px",height:"100px",margin:"150px 0px 50px 500px",boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
       <div>
        <lable >
        <h2 style={{backgroundColor:"blue",marginBottom:"30px" }} >Enter PInConde</h2>
        <input  
        value={pin} 
        onChange={(e) => setPin(e.target.value)}
         type="number" placeholder="Enter Your PINCODE"/>
        </lable>
        <button data-testid="form-submit" type="submit">Procced</button>
        </div>
      </form>
    </div>
  )
}

export default Pin
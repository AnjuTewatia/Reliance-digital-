
// import { Stack, HStack, VStack,Box,Heading,Text } from '@chakra-ui/react'
import react from "react"
import styles from "./Contact.module.css";



function Contact() {
  return (
    <>
    <div className={styles.Contact}>
      <img  style ={{width:"60%",height:"180px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpp-OLSqQlZ22wuuw_Nat3_6Vai4Ngkl6Pmg&usqp=CAU' alt='' />
      <div className='Contacts'  style={{display:"flex",width:"80%",height:"250px",border:"1px solid red",margin:"auto",}}>
      <div style={{width:"30%",gap:"30px",boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>

     
       <div>
      
        <h2 style={{backgroundColor:"blue",marginBottom:"30px" }} >CALL US</h2>
          <h4>For E-Commerce Related Queried</h4>
          <br />
          <h5 style={{color:"red"}}>1800 889 1055</h5>
          <p>(9:30 AM to 7:30 Pm,365 days)</p>
          <br />

         
        </div>
     

      </div>
      {/* ****************************************************** */}
      <div style={{border:"1px solid blue",width:"30%",boxShadow:" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
      <h2 style={{backgroundColor:"blue",marginBottom:"30px" }} >WhatsApp </h2>
          <h4>We are now on WhatsApp</h4>
          <br />
          <h5 style={{color:"red"}}> Send Hi ! to +91 7988123120</h5>
          <p>(9:30 AM to 7:30 Pm,365 days)</p>
          <br />

         


      </div>
      <div style={{width:"30%",boxShadow:" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
        <h2 style={{backgroundColor:"blue",marginBottom:"30px" }} >Email Us</h2>
          <h4>reliancedigital@ril.com</h4>
         



      </div>
      </div>

    </div>
    </>
  )
}

export default Contact
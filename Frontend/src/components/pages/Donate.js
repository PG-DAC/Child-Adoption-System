import './aboutus.css'
import React from 'react';
import NavBar from '../layout/Navbar'



const AboutUs = () => {
  return (
<div>
            <NavBar/>
          <br />
          <br />
           <br />
        
  <div class="about-section">
          <center><h1>
        Bank Information</h1></center>

  </div>
  <div className="divs">
              <center>
              <h2>Send a Cheque</h2>
              <p>Please make cheques payable to 'Vastalya child adoption Center' 
              <br></br>
               and post to:   
              Vastalya child adoption Center, Survey No 239, 
              <br></br>
              F Block, Shree Tiles Chowk,Jaipur,Rajasthan 414111</p>
              </center>
              <br />
              <br/>
    
                  
  </div>
  <div className="divs">
              <center>
              <h2>Bank Transfer</h2>
              <p>Please instruct your bank to deposit funds to our HDFC account 
                <br></br>
                and follow the simple instructions to obtain a tax exemption certificate below:
              
              </p>
              </center>
              <br />
              <br/>
    
                  
  </div>


  <div class="d-flex justify-content-center">
      <div class="card text-center">
         

          <div class="card-body">
                
                <p class="card-text">For deposits being made in ₹ INR. 
                <br></br>
                All Indian deposits qualify for 80G tax exemption.

               <br></br>
               <br></br>
              Bank Name: HDFC
              <br></br>
              <br></br>

             Branch : Jaipur, Ambar Plaza 
             <br></br>
             Building - A, Opposite Old S T Stand, 
             <br></br>
             Station Road, Jaipur, 
             <br></br>
             Rajasthan 414001
            <br></br>
            <br></br>
            Name of Charity : Vastalya
             <br></br>
          Account Number : 01811000053339 - Savings
              <br></br>
           IFSC code: HDFC0000181
            <br></br>
 
        MICR number : 414240001</p>
                 

       
      

          </div>
         
      </div>

      
  </div>
  <div className="divs">
              <center>
              <h2>Need Help?</h2>
              <p>Need help with your donation? Email us at vastalyachildadoptionsystem.org.
                <br></br>
                
              
              </p>
              </center>
              <br />
              <br/>
    
                  
  </div>
</div>




  )
}

export default AboutUs
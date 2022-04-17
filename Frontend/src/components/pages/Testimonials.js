import React from 'react';


import './Testimonials.css';
import Navbar from './../layout/Navbar';


function card({title,imageUrl,body}){
  return(
    <div>
      <Navbar></Navbar><br></br><br></br><br></br><br></br>
      <br/>  
      <div class="container ">
  <div class="row">
    <div class="col order-last">
    <div className='card-container'>
          <div className="image-container">
              <img src="https://theadoptionconsultancy.com/includes/success/data/img/9.jpg"  alt='' />
            
          </div>
      
          <div className="card-content"></div>  
          <div className="card-title">
            
            <h3> {title}</h3>  
          </div>
          <div className="card-body">
            <p>{body}</p>
            The level of professionalism that Vastalya provides to potential adoptive parents is unmatched. 
            Vastalya always offered an honest and transparent answer to any questions I had. 
            Vastalya is extremely versed in diffusing any uncomfortable situations, all while providing a respectful helping hand along the way.
            Vastalya was exactly what I needed. 
            <p>
               <br></br>             - Amber, MN
            </p>
                              
          </div>
          <div className='btn'>
          
          </div>
       </div>
    </div>
    <div class="col">
    <div className='card-container'>
          <div className="image-container">
              <img src="https://theadoptionconsultancy.com/includes/testimonials/data/img/Caroline_Kyle.jpg"  alt='' />
            
          </div>
      
          <div className="card-content"></div>  
          <div className="card-title">
            
            <h3> {title}</h3>  
          </div>
          <div className="card-body">
            <p>{body}</p>
            The best part of our experience with The Adoption Consultancy was the confidence we gained during the process.
             We felt like we had an upper hand working with agencies because we already understood the process from start to finish. 
             It made it way less stressful.
             <p>
               <br></br>             - Elliott & Katie, OR
            </p>
          </div>
          <div className='btn'>
          
          </div>
       </div>
    </div>
    <div class="col order-first">
    <div className='card-container'>
          <div className="image-container">
              <img src="https://theadoptionconsultancy.com/includes/success/data/img/Jared_Heidi.jpg"  alt='' />
            
          </div>
      
          <div className="card-content"></div>  
          <div className="card-title">
            
            <h3> {title}</h3>  
          </div>
          <div className="card-body">
            <p>{body}</p>
            We highly recommend working with Vastalya adoption Center when you decide to adopt. 
            She is very knowledgeable in all things adoption ,This really is necessary when navigating the process. 
            Signing up with The Adoption Consultancy is the only way to go when moving forward with adoption and we plan to do so again if/when we move forward with adopting a second child.
            <p>
               <br></br>             - Sierra & Ben, FL
            </p>
          </div>
          <div className='btn'>
          
          </div>
       </div>
    </div>
  </div>
</div>
      
    </div>
   
  )


  
}


export default card
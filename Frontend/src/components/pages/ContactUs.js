import './contactus.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../layout/Footer'
//import '../css/contactus.css'


import axios from 'axios';
import {  useHistory } from 'react-router-dom'

const ContactUs = () => {
const [userName, setUserName] = useState('')
const [userEmail, setUserEmail] = useState('')
const [userMessage, setUserMessage] = useState('')
const history = useHistory()
const Send = (() => {
 
    if (userName.length === 0) {
        alert('Enter  UserName')
    }
    else if (userEmail.length === 0) {
        alert('enter Email')
    } else if (userMessage.length === 0) {
        alert('enter userMessage')
    }
    
 
    else {
        const body = {
            userName: userName,
            userEmail: userEmail,
        userMessage: userMessage}

        axios.post( `http://localhost:8081/contactUs/add`, body).then(response => {
            const result = response.data
            if (result.status==='success') {
               
                alert('successfully send Message')
              //  history.push('')
            }
            else {
              alert('Error while user ')
            
            }
        })
    }
})


return (
        <div>
            
      
          
            
 <div class="about-section">

               
                <h1 >Contact Us Page</h1>
  <p>We are students of ACTS Netcom Jaipur</p>
  <p>Our Team makes a Portal for Helping Childrens, There is no exercise better for the heart than reaching down
and lifting people up and we are just a medium.</p>
   
   
            </div>
         
            <div className="divss">
            <br />
            <br />
               
          
    <div className="container">
<div className="content">
      <div className="left-side">
          <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic"><h4>Address</h4></div>
              <div className="topic">Jaipur,</div>
              <div className="topic">Maharashtra</div>
          </div>
          <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic"><h4>Phone</h4></div>
              <div className="topic">+0076 6619 0602</div>
              <div className="topic">+0099 2198 1800</div>
          </div>
          <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic"><h4>Email</h4></div>
              <div className="topic">hrishikeshnalavade05@rediff.com</div>
              <div className="topic">golekarsandip1800@gmail.com</div>
              <div className="topic">gunjalbhushan97@gmail.com</div>
              <div className="topic">snehalmahale96@gmail.com</div>
          </div>
                        </div>
                       
                        <div className="right-side">
                        <br />
                <br />
          <div className="topic-text">Send us a message</div>
          <p>If you have any work from me or any types of quries related to my portal, you can send me message from here. It's my pleasure to help you.</p>
        <form>
          <div className="input-box">
                  <input type="text" placeholder="Enter your name" value={userName} onChange={ (e)=>setUserName(e.target.value) } required="required"/>
              </div>
              <div className="input-box">
                  <input type="text" placeholder="Enter your email" value={userEmail} onChange={ (e)=>setUserEmail(e.target.value) } required="required"/>
              </div>
              <div className="input-box message-box">
              <input type="text" placeholder="Enter your message"value={userMessage} onChange={ (e)=>setUserMessage(e.target.value) } required="required"/>
                                </div>
                                <br />     <br />
                
                               
              <div className="buttons">
                  <center>
                  <button type="submit"  onClick={Send} className="btn btn-success">Send</button>
                                    </center>
                                                  
                <br/>
                
                <NavLink className="nav-link" exact to="/parentdash">
                <center>
         <button type="submit" className="btn btn-primary btn-block" style={{ maxWidth: 100 }}>
                      Back
          </button>
          </center>
          </NavLink>
        
                    </div>
                    </form>  
                 </div>
                        <br />
             <br />
         <br />
                    </div>
                 
                </div>
                
                
              
          
                <br />
             <br />
                 
            </div>
            <Footer />
  </div>
    );
}

export default ContactUs

import React from 'react';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { Row, Col } from 'reactstrap'

const Home = () => {
  return (
    <main>
   
      <Navbar /><br></br><br></br><br></br><br></br><br></br>
       {/* main Homepage Image */}
       <Row>
       <div className="container">
                    <img src="./images/imagesnew/Adoptchildimage.png"
                        alt="HomeImage" className="index-image" width="100%"/>
                    <div className="index-title">
                      <br></br>
                      <h3>WELCOME TO Vastlya Child Adoption Center....!!</h3>
                      <br></br>
                    </div>
             
                        <div className="row about-container">
                            <div className="col-lg-8 content order-lg-1 order-2">
                            
                            <div>
                                
                                <p>
                                <h1 className="title">What we do..!</h1>
                                </p>
                                <hr></hr>
                                <p>
                                    <h3>With Any New Experience, It Helps To Have Someone Hold Your Hand</h3>
                            
                                </p>
                                    <h4>
                                    <p>
                                    The Adoption Consultancy will help you navigate what can be an overwhelming, complicated, time-consuming and frustrating process.
                                      </p>
                                    <p>
                                    We help you avoid and overcome domestic adoption difficulties, disappointments and obstacles.
                                    </p>
                                    <p>
                                    We’ll provide the knowledge and insider’s perspective you need to overcome your fears and concerns. We’re with you every step of the way to guide you or even just to provide a listening ear. 
                                    </p>
                                    
                                    </h4>
                                    <br>
                                    </br>
                                   <h3>We Understand Adoption</h3>
                                   <hr></hr>
                                <h4>
                                      
                                <ul>
                                          <li>We'll gently educate, inform and guide you throughout the domestic adoption process.</li>
                                      </ul>
                                  
                                      <ul>
                                          <li>We can work across our network of agencies and attorneys to enable you to safely and quickly adopt a newborn.</li>
                                      </ul>
                                
                                      <ul>
                                          <li> We eliminate obstacles and reduce your wait time.</li>
                                      </ul>
                                 
                                </h4>
                                  
                                </div>
                            </div>
                            <div className="col-lg-4 background order-lg-4">
                              <br></br>
                                <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2018-05/11/full/1526054709-7115.jpg" 
                                    alt="AboutLogoImage" className="about-image" width="100%"/>
                            </div>
                        </div>
                    </div>
                    
               
                </Row> <br></br><br></br><br></br><br></br>
                <Footer />
   </main >
   
  );
  
};

export default Home;

import React from 'react'
//import React, { useState } from 'react'

import { Row, Col } from 'reactstrap'

import Footer from '../../../layout/Footer'
import ParentFunctions from '../../../../Axios/ParentAxios'
import { NavLink } from 'react-router-dom'
import PDashNavbar from '../../../layout/PDashNavbar'


class PViewChilds extends React.Component{

  constructor(props){
    super(props)
    this.state={
      childdetails:[]
    }
  }

  componentDidMount(){
    
    ParentFunctions.getAllChilds().then((res)=>{
      console.log(res.data)
      this.setState(()=>{
        return{
          childdetails:res.data
        }
      })
    })
  }

  render(){
  return (
    <div>
      <PDashNavbar />
      <div className="py-5">
        <Row>
          <Col md={10}>
            <h4 className="text-center">View Childs</h4>
            <br />
            <br />
            <table
              className="table"
              className="table table-bordered border-dark"
              className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col" colSpan="3">
                    Child Id
                    </th>
                  <th scope="col" colSpan="2">
                    Name
                  </th>
                  <th scope="col" colSpan="1">
                    Age
                  </th>
                  <th scope="col" colSpan="1">
                    bloodGroup
                  </th>
                  <th scope="col" colSpan="1">
                   ColourComplexity
                  </th>
                  <th scope="col" colSpan="1">
               
                  </th>
                  <th scope="col" colSpan="1">
                  Deficiency
                  </th>
                  <th scope="col" colSpan="1">
                   Education
                  </th>
                  <th scope="col" colSpan="1">
                  Gender
                  </th>
                  <th scope="col" colSpan="2">
                  MedicalHistory
                  </th>
                  <th scope="col" colSpan="2">
                    Other
                  </th>
                  <th scope="col" colSpan="1">
                    Status
                  </th>
                  <th colSpan="15"></th>
                  <th scope="col" colSpan="2">
                Image
                  </th>
                  <th colSpan="12"></th><th colSpan="12"></th>


                </tr>
                
              </thead>
              <tbody>
                {this.state.childdetails.map((child)=>{
                  return (
                  <tr>
                  <td colSpan="3">{child.childId}</td>
                  <td colSpan="2">{child.name}</td>
                  <td colSpan="1">{child.age}</td>
                  <td colSpan="1">{child.bloodGroup}</td>
                  <td colSpan="2">{child.colourComplexity}</td>
                  <td colSpan="1">{child.deficiency}</td>
                  <td colSpan="1">{child.education}</td>
                  <td colSpan="1">{child.gender}</td>
                  <td colSpan="2">{child.medicalHistory}</td>
                  <td colSpan="2">{child.other}</td>
                  <td colSpan="1">{child.status}</td>
                  <td colSpan="5"></td><td colSpan="5"></td><td colSpan="5"></td>
                 <td colSpan="3" >
                  <img height="100" className="thumbnail" src={'http://localhost:8081/' + child.image} />
                  </td>
                   </tr>
                
                )
                })}
                
              </tbody>
              <NavLink className="nav-link" exact to="/parentdash">
         <button type="submit" className="btn btn-primary btn-block" style={{ maxWidth: 100 }}>
                      Back
          </button>
          </NavLink>

          <NavLink className="nav-link" exact to="/adoptionform">
         <button type="submit" className="btn btn-primary btn-block" style={{ maxWidth: 100 }}>
                      Apply
          </button>
          
          </NavLink>
            </table>
          </Col>
          <Col></Col>
        </Row>
      </div><Footer />
    </div>
  )
  }
}

export default PViewChilds

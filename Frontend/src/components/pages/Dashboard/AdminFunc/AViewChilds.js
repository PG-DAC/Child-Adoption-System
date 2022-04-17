import React from 'react'
//import React, { useState } from 'react'

import { Row, Col } from 'reactstrap'


import AdminFunctions from '../../../../Axios/AdminAxios'
import ADashNavbar from '../../../layout/ADashNavbar'
import { NavLink } from 'react-router-dom'

class AViewChilds extends React.Component{

 

  constructor(props){
    super(props)
    this.state={
      childdetails:[]
    }
  }

  componentDidMount(){
    
    AdminFunctions.getAllChilds().then((res)=>{
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
      <ADashNavbar />
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
              <thead >
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
                  Deficiency
                  </th>
                  <th scope="col" colSpan="1">
                   Education
                  </th>
                  <th scope="col" colSpan="1">
                  Gender
                  </th>
                  <th scope="col" colSpan="1">
                  MedicalHistory
                  </th>
                  <th scope="col" colSpan="1">
                    Other
                  </th>
                  <th scope="col" colSpan="1">
                    Status
                  </th><th colSpan="15"></th>
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
                  <td colSpan="1">{child.colourComplexity}</td>
                  <td colSpan="1">{child.deficiency}</td>
                  <td colSpan="1">{child.education}</td>
                  <td colSpan="1">{child.gender}</td>
                  <td colSpan="1">{child.medicalHistory}</td>
                  <td colSpan="1">{child.other}</td>
                  <td colSpan="1">{child.status}</td>
                <td colSpan="5"></td><td colSpan="5"></td><td colSpan="5"></td>
                 <td colSpan="3" >
                  <img height="100" className="thumbnail" src={'http://localhost:8081/' + child.image} />
                  </td>

                  <td>
                
                  <a class="btn btn-primary" href="/editchildprofile"><i class="fa fa-cog"></i> Update</a>    
              <th></th>
               <a class="btn btn-danger" href="/admin-dash"><i class="fa fa-trash-o fa-lg"></i> Delete</a>
              </td>
          
                 <td colSpan="10" ></td>
                </tr>
                
                )
                })}
                
              </tbody>
              <NavLink className="nav-link" exact to="/admin-dash">
         <button type="submit" className="btn btn-primary btn-block" style={{ maxWidth: 100 }}>
                      Back
          </button>
          
          </NavLink>
            </table>
          </Col>
        </Row>
      </div>
    </div>
  )
  }
}

export default AViewChilds

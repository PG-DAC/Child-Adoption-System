import React from 'react'

import DashNavbar from '../../layout/ADashNavbar'
import Footer from '../../layout/Footer'
import { Card, CardTitle, CardGroup, CardBody, Row, Col } from 'reactstrap'

import DashMenuBar from './AdminDashMenuBar'
import AdminFunctions from '../../../Axios/AdminAxios'

class AdminDash extends React.Component{

  constructor(props){
    super(props)


    this.state={
      totalrequest:'',
      totalchild:'',
      // totalparent :''

    }
  }

  componentDidMount(){
   

    AdminFunctions. getCountRequest().then((res)=>{
     this.setState({
      totalrequest:res.data
       })
     
    })

    AdminFunctions. getCountChild().then((res)=>{
    
      this.setState({
        totalchild:JSON.stringify(res.data.data)
        })
      
     })

     AdminFunctions. getCountParent().then((res)=>{
      this.setState({
        totalparent:JSON.stringify(res.data.data)
        })
      
    })

  
   
}

  render(){

  return (
    <div>
      <DashNavbar />
      <br></br><br></br><br></br>
      <div className="py-5">
        <Row>
          <Col md={2}>
            <div>
              <DashMenuBar />
            </div>
          </Col>
          <Col>
            <CardGroup>
              <Card body inverse color="primary" className="text-center">
                <CardBody>
                  <p>
                    <i class="fa fa-users fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.totalrequest}</CardTitle>
                  <CardTitle tag="h5">Total AdoptionForm Request</CardTitle>
                </CardBody>
              </Card>

              <Card body inverse color="primary" className="text-center">
                <CardBody>
                  <p>
                    <i class="fa fa-users fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.totalchild}</CardTitle>
                  <CardTitle tag="h5">Total Childs</CardTitle>
                </CardBody>
              </Card>

              <Card body inverse color="primary" className="text-center">
                <CardBody>
                  <p>
                    <i class="fa fa-users fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.totalparent}</CardTitle>
                  <CardTitle tag="h5">Total Parent Registered</CardTitle>
                </CardBody>
              </Card>

              
            </CardGroup>
            <br></br>
            <br></br>
            <br></br>
            <div>
       
            </div>
          </Col>
        </Row>
      </div><Footer />
    </div>
  )
              }
}

export default AdminDash

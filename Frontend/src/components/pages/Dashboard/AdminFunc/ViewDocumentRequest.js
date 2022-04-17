import React from 'react'
import Footer from '../../../layout/Footer'
import { Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import ADashNavbar from '../../../layout/ADashNavbar'

import AdminFunctions from '../../../../Axios/AdminAxios'
import User from './../../User';


const adoptionform=sessionStorage.getItem('user')
const temp=JSON.parse(adoptionform)

class ViewDocumentRequest extends React.Component {


  constructor(props){
    super(props)

    this.state={
      enquiry:[],response:''
    }

  }

  componentDidMount(){
    
    AdminFunctions.getAllDocumentRequest().then((res)=>{
   
      

    this.setState(()=>{
      return {
        enquiry:res.data.data
      }
    })

    })
}

saveform(enq){

  enq.response=this.state.response

 

  AdminFunctions.setDocumentResponse(
    {
      id:enq.documentId,
      response:enq.response,
     }
  
  ).then((res)=>{

    console.log(res.data)

  })
 
  this.setState(()=>{
    return {
      response:''
  }
  })
  this.props.history.push('/admin-dash')

}
  render(){
  
  return (
    <div>
      <ADashNavbar />
      <div className="py-5">
        <Row>
         
          <Col md={10}>
            <h4 className="text-center">View Document Request</h4>
            <br />
            <br />
            <table
              className="table"
              className="table table-bordered border-dark"
              className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Document Id</th>
                  <th scope="col" colSpan="1">
                  Address Proof
                  </th>
                  <th scope="col" colSpan="1">
                  Identity Proof
                  </th>
                  <th scope="col" colSpan="1">
                  Income Proof
                  </th>
                  <th scope="col" colSpan="1">
                  Nationality Certificate
                  </th>
                  <th scope="col" colSpan="1">
                  NonCriminal Certificate
                  </th>
                  
                  <th scope="col" colSpan="2">
                  Response
                  </th>
                  <th scope="col" colSpan="2">
                  Reply
                  </th>
      
                </tr>
              </thead>
              <tbody>
                  {this.state.enquiry.map((enq)=>{
                    return(
                    <tr style={{ height: 100 }}>
                  <th scope="row">{enq.documentId}</th>
                  <td colSpan="1" >
                  <img height="100" className="thumbnail" src={'http://localhost:8081/admin/getdocumentrequest' + enq.addressProof} />
                  </td>

                  <td colSpan="1" >
                  <img height="100" className="thumbnail" src={'http://localhost:8081/admin/getdocumentrequest' + enq.identityProof} />
                  </td>


                  <td colSpan="1" >
                  <img height="100" className="thumbnail" src={'http://localhost:8081/admin/getdocumentrequest' + enq.identityProof} />
                  </td>

                  <td colSpan="1" >
                  <img height="100" className="thumbnail" src={'http://localhost:8081/admin/getdocumentrequest' + enq.nationalityCertificate} />
                  </td>

                  <td colSpan="1" >
                  <img height="100" className="thumbnail" src={'http://localhost:8081/admin/getdocumentrequest' + enq.nonCriminal_certificate} />
                  </td>
                  {/* <td colSpan="2">{enq.addressProof}</td> */}
                  {/* <td colSpan="2">{enq.identityProof}</td>
                  <td colSpan="2">{enq.identityProof}</td>
                  <td colSpan="2">{enq.nationalityCertificate}</td>
                  <td colSpan="1">{enq.nonCriminal_certificate}</td> */}
                 
                  <td colSpan="2">
                    <input
                      name="response"
                      className="form-control rounded-0"
                      style={{ height: 100 }}
                      type="text"
                      onChange={(e) => {
                       this.setState(()=>{
                         return {
                           response:e.target.value
                         }
                       })
                      }}></input>
                      
                  </td>

                  <td colSpan="2">
                    {' '}
                    <button
                      type="button"
                      rel="tooltip"
                      className="btn btn-success btn-round btn-just-icon btn-sm"
                      data-original-title=""
                      title=""
                      onClick={() => {
                        this.saveform(enq)
                      }}>
                      
                    </button>
                  </td>
                </tr>
                    )
                  })}
                
                
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
      <NavLink className="nav-link" exact to="/admin-dash">
         <button type="submit" className="btn btn-primary btn-block" style={{ maxWidth: 100 }}>
                      Back
          </button><br></br><br></br>
          </NavLink> <Footer />
    </div>
  )
  }
}

export default ViewDocumentRequest

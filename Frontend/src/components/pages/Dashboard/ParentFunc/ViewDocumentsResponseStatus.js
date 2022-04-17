import React from 'react'
import { Row, Col } from 'reactstrap'
import PDashNavbar from '../../../layout/PDashNavbar';
import ParentFunctions from '../../../../Axios/ParentAxios'
import Footer from '../../../layout/Footer'
import { NavLink } from 'react-router-dom'
class ViewDocumentsResponseStatus extends React.Component {

    constructor(props){
        super(props)
    
        this.state={
          enquiries:[]
        }
      }
    
      componentDidMount(){
        const documentsmaster=sessionStorage.getItem('user')
        const temp=JSON.parse(documentsmaster)
        ParentFunctions.viewDocumentResponse(temp.id).then((res)=>{
          console.log(res.data)
          this.setState(()=>{
            return{
              enquiries:res.data.data
            }
         })
        })
    
       console.log(this.state.enquiries)
      }
      render(){
    
      return (
        <div>
          <PDashNavbar />
          <div className="py-5">
            <Row>
    
              <Col md={10}>
                <h4 className="text-center">Documents Response Status</h4>
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
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.enquiries.map((enq)=>{
                      return (
                        <tr>
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
                      <td scope="col" colSpan="3">
                        {enq.response !=null ?  enq.response : 'Not Yet Responded By Admin' } 
                      </td>
                    </tr>
                      )
                    })}
                    
                  </tbody>
                </table>
              </Col>
            </Row>
          </div>
          <NavLink className="nav-link" exact to="/parentdash">
         <button type="submit" className="btn btn-primary btn-block" style={{ maxWidth: 100 }}>
                      Back
          </button><br></br><br></br>
          </NavLink>
          <Footer />
        </div>
      )
    }
    }
    

export default ViewDocumentsResponseStatus

import React from 'react'

import { Row, Col } from 'reactstrap'
import Footer from '../../../layout/Footer'
import ADashNavbar from '../../../layout/ADashNavbar'
import { Link } from 'react-router-dom'
import AdminFunctions from '../../../../Axios/AdminAxios'

class ViewFormRequ extends React.Component {
  constructor(props){
    super(props)

    this.state={
      enquiry:[],response:''
    }

  }

  componentDidMount(){
    
    AdminFunctions.getAllFormRequest().then((res)=>{
   
      

    this.setState(()=>{
      return {
        enquiry:res.data
      }
    })

    })
}

saveform(enq){

  enq.response=this.state.response
  console.log("Enq Object  = "+enq.response)
  console.log("Enq is  = "+enq.formNo)

  AdminFunctions.setFormResponse(
    {
      id:enq.formNo,
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
            <h4 className="text-center">View Adoption Form Request</h4>
            <br />
            <br />
            <table
              className="table"
              className="table table-bordered border-dark"
              className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Form No</th>
                  <th scope="col" colSpan="1">
                  Applicant Gender
                  </th>
                  <th scope="col" colSpan="1">
                  Spouse Gender
                  </th>
                  <th scope="col" colSpan="1">
                  Spouse Name
                  </th>
                  <th scope="col" colSpan="1">
                  Biological Children
                  </th>
                  <th scope="col" colSpan="2">
                  Adoption Reason
                  </th>
                  <th scope="col" colSpan="1">
                  Nationality
                  </th>
                  <th scope="col" colSpan="1">
                  Qualification
                  </th>
                  <th scope="col" colSpan="1">
                  Occupation
                  </th>
                  <th scope="col" colSpan="1">
                  Company Details
                  </th>
                  <th scope="col" colSpan="1">
                  Annual Income
                  </th>
                  <th scope="col" colSpan="1">
                  Pancard No
                  </th>
                  <th scope="col" colSpan="2">
                  Permanent Address
                  </th>
                  <th scope="col" colSpan="1">
                  Child Id
                  </th>
                  <th scope="col" colSpan="1">
                  Response
                  </th>
                  <th scope="col" colSpan="1">
                  Reply
                  </th>
      
                </tr>
              </thead>
              <tbody>
                  {this.state.enquiry.map((enq)=>{
                    return(
                    <tr style={{ height: 100 }}>
                  <th scope="row">{enq.formNo}</th>
                  <td colSpan="1">{enq.applicantGender}</td>
                  <td colSpan="1">{enq.spouseGender}</td>
                  <td colSpan="1">{enq.spouseName}</td>
                  <td colSpan="1">{enq.biologicalChildren}</td>
                  <td colSpan="2">{enq.adoptionReason}</td>
                  <td colSpan="1">{enq.nationality}</td>
                  <td colSpan="1">{enq.qualification}</td>
                  <td colSpan="1">{enq.occupation}</td>
                  <td colSpan="1">{enq.companyDetails}</td>
                  <td colSpan="1">{enq.annualIncome}</td>
                  <td colSpan="1">{enq.pancard}</td>
                  <td colSpan="2">{enq.permanentAddress}</td>
                  <td colSpan="1">{enq.childId}</td>
                  <td colSpan="1">
                    <input
                      name="response"
                      className="form-control rounded-0"
                      style={{ height: 100 }}
                      type="text"
                      onChange={(e) => {
                       this.setState(()=>{
                         console.log("Inside On Change = "+e.target.value)
                         return {
                           response:e.target.value
                         }
                       })
                      }}></input>
                      
                  </td>

                  <td colSpan="1">
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
            <div className="col-1">
            <Link to="/admin-dash">
              <a className="btn btn-warning">Back</a>
            </Link></div>
          </Col>
        </Row>
      </div>  <Footer />
    </div>
  )
  }
}

export default ViewFormRequ

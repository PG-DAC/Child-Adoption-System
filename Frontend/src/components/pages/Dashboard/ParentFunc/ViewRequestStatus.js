import React from 'react'
import { Row, Col } from 'reactstrap'
import PDashNavbar from '../../../layout/PDashNavbar';
import Footer from '../../../layout/Footer'
import ParentFunctions from '../../../../Axios/ParentAxios'
import { NavLink } from 'react-router-dom'

class ViewRequestStatus extends React.Component {


  constructor(props){
    super(props)

    this.state={
      enquiries:[]
      
    }
  }

  componentDidMount(){
    const adoptionform=sessionStorage.getItem('user')
    const temp=JSON.parse(adoptionform)

    ParentFunctions.viewResponse(temp.id).then((res)=>{
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
            <h4 className="text-center">Response Status</h4>
            <br />
            <table
              className="table"
              className="table table-bordered border-dark"
              className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col" colSpan="1">
                    Form No.
                  </th>
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
                  <th>Response</th>
                </tr>
              </thead>
              <tbody>
                {this.state.enquiries.map((enq)=>{
                  return (
                    <tr>
                  <th scope="row" colSpan="1">
                    {enq.formNo}
                  </th>
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
        {/* <pre>{JSON.stringify(this.state.enquiries, null, 4)}</pre> */}
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

export default ViewRequestStatus

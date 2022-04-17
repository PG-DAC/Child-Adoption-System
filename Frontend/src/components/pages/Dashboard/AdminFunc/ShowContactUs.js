import React from 'react'
import { Row, Col } from 'reactstrap'
import AdminFunctions from '../../../../Axios/AdminAxios'
import ADashNavbar from '../../../layout/ADashNavbar'
import { NavLink } from 'react-router-dom'
import Footer from '../../../layout/Footer'

class ShowContactUs extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            contactus:[]
        }
    }

    componentDidMount() {
    
        AdminFunctions.getAllContact().then((res) => {
            console.log(res.data)
            this.setState(() => {
                return {
                    contactus: res.data
                }
            })
        })
    }

    render() {
        return (
            <div>
                <ADashNavbar />
                <div className="py-5">
                    <Row>
                        <Col md={10}>
                            <h4 className="text-center"> Enquires </h4>
                            <br />
                            <br />
                            <table
                                className="table"
                                className="table table-bordered border-dark"
                                className="table table-striped table-hover">
                                <thead >
                                    <tr>

                                        <th scope="col" colSpan="1">
                                        Sr No
                                        </th>
                                        <th scope="col" colSpan="2">
                                         Name
                                        </th>
                                        <th scope="col" colSpan="2">
                                        EmailId
                                        </th>
                                        <th scope="col" colSpan="3">
                                        Message
                                        </th>

                                    </tr>

                                </thead>
                                <tbody>
                                    {this.state.contactus.map((contact) => {
                                        return (
                                            <tr>

                                                <td colSpan="1">{contact.serialId}</td>
                                                <td colSpan="2">{contact.userName}</td>
                                                <td colSpan="2">{contact.userEmail}</td>
                                                <td colSpan="3">{contact.userMessage}</td>

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
                </div><Footer />
            </div>
        )
    }
}

export default ShowContactUs

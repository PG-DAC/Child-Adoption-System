import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'reactstrap'


class AMyProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
    }
  }

  componentDidMount() {
    const user = sessionStorage.getItem('user')
    const temp = JSON.parse(user)
    this.setState({
      user: temp,
    })

    console.log(this.state.user)
  }

  render() {
    return (
      <div>
      
        <div className="py-5">
          <Row>
            <Col >
              <div>
                <h4 className="card-title mt-3 text-center">My Profile</h4>
                <br></br>
                <br></br>

                <div className="form-group input-group">
                  <h5>Name : {this.state.user.name}</h5>
                </div>
                <div className="form-group input-group">
                  <h5>Email : {this.state.user.email}</h5>
                </div>
                <div className="form-group input-group">
                  <h5>Mobile.No : {this.state.user.mobileNumber}</h5>
                </div>

                <br></br>
                <div className="form-group">
                  <NavLink className="nav-link" exact to="/change-password">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      style={{ maxWidth: 300 }}>
                      Change Password
                    </button>
                  </NavLink>
                  <NavLink className="nav-link" exact to="/admin-dash">
         <button type="submit" className="btn btn-primary btn-block" style={{ maxWidth: 100 }}>
                      Back
          </button>
          </NavLink>
                </div>
              </div>
              
            </Col>
           <Col>
           <div className="container" width="100%">
            <img src="./images/imagesnew/Myprofile.jpg"
                        alt="HomeImage" className="index-image" width="100%" />
                        </div>
                        <div></div>
           </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default AMyProfile

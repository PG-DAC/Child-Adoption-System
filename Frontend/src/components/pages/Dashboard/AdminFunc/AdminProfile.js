import React from 'react'

import { Row, Col } from 'reactstrap'
import ADashNavbar from '../../../layout/ADashNavbar'

import DashMenuBar from '../AdminDashMenuBar'

const AdminProfile = () => {
  return (
    <div>
      <ADashNavbar />
      <div className="py-5">
        <Row>
          <Col md={2}>
            <DashMenuBar />
          </Col>
          <Col md={8}>
            <br></br>
            <br></br>
            <div className="card bg-light">
              <h4 className="card-title mt-3 text-center">My Profile</h4>
              <br></br>
              <br></br>

              <div className="form-group input-group">
                <h5>Name :</h5>
              </div>
              <div className="form-group input-group">
                <h5>Email :</h5>
              </div>
              <div className="form-group input-group">
                <h5>Mobile.No :</h5>
              </div>

              <br></br>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ maxWidth: 300 }}>
                  {' '}
                  Change Password{' '}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AdminProfile

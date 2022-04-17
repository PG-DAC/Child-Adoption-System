import React from 'react';

import { Row, Col } from 'reactstrap';
import PDashNavbar from '../../../layout/PDashNavbar';
import DashMenuBar from '../ParentDashMenuBar';
 //import ParentFunctions from '../../../../Axios/ParentAxios'
 //import { useHistory } from 'react-router'

const ParentProfile = () => {
  return (
    <div>
      <PDashNavbar />
      <div className="py-5">
        <Row>
          <Col md={2}>
            <DashMenuBar />
          </Col>
          <Col md={8}>
            <div>
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
  );
};

export default ParentProfile;

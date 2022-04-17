import React from 'react'
import Footer from '../../layout/Footer'
import DashMenuBar from './ParentDashMenuBar'
import { Row, Col } from 'reactstrap'

import PDashNavbar from '../../layout/PDashNavbar'

class ParentDash extends React.Component {

  render(){
  return (
    <div>
      <PDashNavbar /> <br></br><br></br><br></br>
      <div className="py-5">
        <Row>
          <Col md={2}>
            <DashMenuBar />
          </Col>
          <Col >
           <div className="container"  >
            <img src="./images/imagesnew/parentdash.jpg"
                        alt="HomeImage" className="index-image" width="100%" />
                        </div>
                        <div></div>
           </Col>

        </Row>
      </div><Footer />
    </div>
  )
 }
}

export default ParentDash

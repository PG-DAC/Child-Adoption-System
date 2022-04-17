import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const DashMenuBar = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <NavLink className="nav-link" exact to="/parentdash">
            <h5>
              {' '}
              <i className="fa fa-dashboard"></i>
              <p>Parent DashBoard</p>
            </h5>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/pviewchilds">
            <Button outline color="danger">
              View Child Details<br></br>
              <i class="fa fa-users fa-2x" aria-hidden="true"></i>
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/adoptionform">
            <Button outline color="secondary">
              Apply for Adoption<br></br>
              <i class="fa fa-2x fa-registered"></i>
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/upload-documents">
            <Button outline color="success">
              Upload Documents<i class="fa fa-2x fa-upload"></i>
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/request-status">
            <Button outline color="secondary">
              View Response Status<br></br>
              <i class="fa fa-2x fa-reply-all"></i>
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/viewdocstatus">
            <Button outline color="success">
              View Documents Status<br></br>
              <i class="fa fa-2x fa-reply-all"></i>
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/peditprofile">
            <Button outline color="danger">
             Update Profile<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
            </Button>
          </NavLink>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default DashMenuBar

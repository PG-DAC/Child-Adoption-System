import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const DashMenuBar = () => {
  return (
    <div>
      <ListGroup >
      <ListGroupItem>
          <NavLink className="nav-link" exact to="/admin-dash">
            <h5>
              <i className="fa fa-dashboard"></i>
              <p>Admin DashBoard</p>
            </h5>
          </NavLink>
        </ListGroupItem>
        
      <ListGroupItem
          style={{
            display: 'flex',
            justifyContent: 'left',
          }}>
          <NavLink className="nav-link" exact to="/addchilddetails">
            
            <Button outline color="info" >
              Add New Child<br></br>
              <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/aviewchilds">
            <Button outline color="secondary">
              View Child Details<br></br>
              <i class="fa fa-users fa-2x" aria-hidden="true"></i>
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem
          style={{
            display: 'flex',
            justifyContent: 'left',
          }}>
          <NavLink className="nav-link" exact to="/view-form-request">
            <Button outline color="info">
              View Adoption Form Request<br></br>
              <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem
         style={{
          display: 'flex',
          justifyContent: 'left',
        }}>
        <NavLink className="nav-link" exact to="/view-document-request">
            <Button outline color="secondary">
              View Adoption Document<br></br>
              <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem
         style={{
          display: 'flex',
          justifyContent: 'left',
        }}>
          <NavLink className="nav-link" exact to="/add-new-admin">
            <Button outline color="info">
              Add New Admin<br></br>
              <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/show-contacts">
            <Button outline color="secondary">
            View Enquiries
            <i class="fa fa-volume-control-phone fa-3x"></i>
            </Button>
          </NavLink>
        </ListGroupItem>

      
    
        <ListGroupItem>
          <NavLink className="nav-link" exact to="/aeditprofile">
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

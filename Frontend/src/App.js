import React from 'react'
import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Parent from './components/pages/Parent';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import AdminDash from './components/pages/Dashboard/AdminDash';
import ParentDash from './components/pages/Dashboard/ParentDash';

import ChangePassword from './components/pages/Dashboard/AdminFunc/ChangePassword'
import AddNewAdmin from './components/pages/Dashboard/AdminFunc/AddNewAdmin';

import Testimonials from './components/pages/Testimonials'
import Donate from './components/pages/Donate'
import ParentChangePassword from './components/pages/Dashboard/ParentFunc/ParentChangePassword'
import AMyProfile from './components/pages/Dashboard/AdminFunc/AMyProfile'
import PMyProfile from './components/pages/Dashboard/ParentFunc/PMyProfile'

import AViewChilds from './components/pages/Dashboard/AdminFunc/AViewChilds'


import PViewChilds from './components/pages/Dashboard/ParentFunc/PViewChilds'
import Achild from './components/pages/Dashboard/AdminFunc/Achild'
import AdoptionForm from './components/pages/Dashboard/ParentFunc/AdoptionForm'
import ParentEditProfile from './components/pages/Dashboard/ParentFunc/ParentEditProfile'
import AdminEditProfile from './components/pages/Dashboard/AdminFunc/AdminEditProfile'
import EditChildProfile from './components/pages/Dashboard/AdminFunc/EditChildProfile'
import ViewFormRequ from './components/pages/Dashboard/AdminFunc/ViewFormRequ'
import ViewRequestStatus from './components/pages/Dashboard/ParentFunc/ViewRequestStatus'
import UploadDocument from './components/pages/Dashboard/ParentFunc/UploadDocument'
import ViewDocumentRequest from './components/pages/Dashboard/AdminFunc/ViewDocumentRequest'
import ShowContactUs from './components/pages/Dashboard/AdminFunc/ShowContactUs'
import DeleteChild from './components/pages/Dashboard/AdminFunc/DeleteChild'
import Childs from './components/pages/Dashboard/AdminFunc/Childs'
import ViewDocumentsResponseStatus from './components/pages/Dashboard/ParentFunc/ViewDocumentsResponseStatus'


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Parent} />
       
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/testimonial" component={Testimonials} />
        <Route exact path="/donate" component={Donate} />
        
        <Route exact path="/admin-dash" component={AdminDash} />
        <Route exact path="/parentdash" component={ParentDash} />
       
        <Route exact path="/amyprofile" component={AMyProfile} />
        <Route exact path="/pmyprofile" component={PMyProfile} />

         <Route exact path="/changepassword" component={ParentChangePassword} />
        <Route exact path="/change-password" component={ChangePassword} />

        <Route exact path="/peditprofile" component={ParentEditProfile} />
        <Route exact path="/aeditprofile" component={AdminEditProfile} />
        <Route exact path="/editchildprofile/:childId" component={EditChildProfile} />
        <Route exact path="/deletechild" component={DeleteChild} />
        

        <Route exact path="/add-new-admin" component={AddNewAdmin} />


        <Route exact path="/aviewchilds" component={Childs} />
        <Route exact path="/pviewchilds" component={PViewChilds} />
        <Route exact path="/aviewchild" component={AViewChilds} />


        <Route exact path="/addchilddetails" component={Achild} />
        <Route exact path="/adoptionform" component={AdoptionForm} />
        <Route exact path="/upload-documents" component={UploadDocument} />

        <Route exact path="/viewdocstatus" component={ViewDocumentsResponseStatus} />
        <Route exact path="/view-form-request" component={ViewFormRequ} />
        <Route exact path="/request-status" component={ViewRequestStatus} />
        <Route exact path="/view-document-request" component={ViewDocumentRequest} />
        <Route exact path="/show-contacts" component={ShowContactUs} />
    
      </Switch>
    </div>
  </Router>
  );
}

export default App;

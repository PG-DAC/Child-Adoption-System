import React from 'react'
import axios from 'axios'
import { Row, Col } from 'reactstrap'
import DashMenuBar from '../ParentDashMenuBar';
import PDashNavbar from '../../../layout/PDashNavbar';
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Footer from '../../../layout/Footer'

const UploadDocument = () => {

  const [user, setUser] = useState('')
  const [addressProof, setAddressProof] = useState(undefined)
  const [identityProof, setIdentityProof] = useState(undefined)
  const [incomeProof, setIncomeProof] = useState(undefined)
  const [nationalityCertificate, setNationalityCertificate] = useState(undefined)
  const [nonCriminal_certificate, setNonCriminal_certificate] = useState(undefined)


  const [user1, setUser1] = useState(JSON.parse(sessionStorage.getItem('user')))
  console.log(user1)
  const history = useHistory()

  const onFileSelect = (event) => {
    setAddressProof(event.target.files[0])
    setIdentityProof(event.target.files[0])
    setIncomeProof(event.target.files[0])
    setNationalityCertificate(event.target.files[0])
    setNonCriminal_certificate(event.target.files[0])
  }

  const addDocumentToDB = () => {
    if (!addressProof) {
      alert('select address proof')
    } else if (!identityProof) {
      alert('select identity proof')
    } else if (!incomeProof) {
      alert('select incomeProof')
    } else if (!nationalityCertificate) {
      alert('select nationality certificate')
    } else if (!nonCriminal_certificate) {
      alert('Select noncriminal certificate')
    } else {
      const data = new FormData()
   
      data.append('addressProof', addressProof)
      data.append('identityProof', identityProof)
      data.append('incomeProof', incomeProof)
      data.append('nationalityCertificate', nationalityCertificate)
      data.append('nonCriminal_certificate', nonCriminal_certificate)
      data.append('user_id', user1.id)

      // const documentmaster=sessionStorage.getItem('user')
      // const temp=JSON.parse(documentmaster)


      sessionStorage.setItem('documentMaster', JSON.stringify(data.data));
      // send the Child info to the API
      axios.post(`http://localhost:8081/document/adddocument/${user1.id}`, data).then((response) => {
        const result = response.data
    
        if (result.status === 'success') {
          console.log("data uploaded")
          alert('Documents added successfully')

          history.push('/parentdash')
        } else {
          console.log(result.error)
          alert('error while uploading documents')
        }
      })
    }
  }



  return (
    <div>
      <div className="container" ><br></br>
      <h1 className="page-title">Upload Document</h1>


      <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">Address Proof</label>
          <input
            accept="addressProof/*"
            onChange={onFileSelect}
            type="file"
            className="form-control"
          />
        </div></div>

      <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">Identity Proof</label>
          <input
            accept="identityProof/*"
            onChange={onFileSelect}
            type="file"
            className="form-control"
          />
        </div></div>

      <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">Income Proof</label>
          <input
            accept="incomeProof/*"
            onChange={onFileSelect}
            type="file"
            className="form-control"
          />
        </div></div>

      <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">NationalityCertificate</label>
          <input
            accept="nationalityCertificate/*"
            onChange={onFileSelect}
            type="file"
            className="form-control"
          />
        </div></div>
      <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">NonCriminal Certificate</label>
          <input
            accept="nonCriminal_certificate/*"
            onChange={onFileSelect}
            type="file"
            className="form-control"
          />
        </div></div>


        <div className="mb-3">
            {/*<label htmlFor="">User Id</label>*/}
            <input
              onChange={(e) => {
                setUser(e.target.value)
              }}
              type="hidden"
              className="form-control"
            />
          </div>


          <div className="col-1">
      <div className="mb-3">
        <button onClick={addDocumentToDB} className="btn btn-success">
          Submit
        </button>{'   '}
        </div>
        
        <Link to="/parentdash">
              <a className="btn btn-warning">Back</a>
            </Link><br></br></div>
            </div><Footer />
    </div>


  );
};


export default UploadDocument
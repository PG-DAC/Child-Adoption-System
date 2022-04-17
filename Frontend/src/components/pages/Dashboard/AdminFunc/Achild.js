import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Col,Form, FormGroup, Label, Input } from 'reactstrap'
import Footer from '../../../layout/Footer'
//import './AddSongToAlbum.css'
//AddSongsToAlbum
//const url='http://localhost:8081/admin'

const Achild = () => {
  
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [colourComplexity, setColourComplexity] = useState('')
  const [deficiency, setDeficiency] = useState('')
  const [education, setEducation] = useState('')
  const [gender, setGender] = useState('')
  const [medicalHistory, setMedicalHistory] = useState('')
  const [other, setOther] = useState('')
  const [status, setStatus] = useState('')
  const [user, setUser] = useState('')
  const [image, setImage] = useState(undefined)

  const [user1, setUser1] = useState(JSON.parse(sessionStorage.getItem('user')))
  console.log(user1)
  const history = useHistory()

  const onFileSelect = (event) => {
    setImage(event.target.files[0])
  }

  
  const addChildToDB = () => {
    if (name.length === 0) {
      alert('enter name')
    } else if (age.length === 0) {
      alert('enter age')
    } else if (bloodGroup.length === 0) {
      alert('enter bloodGroup')
    } else if (colourComplexity.length === 0) {
      alert('enter colourcomplexity')
    } else if (deficiency.length === 0) {
      alert('enter deficiency')
    } else if (education.length === 0) {
      alert('enter education')
    } else if (gender.length === 0) {
      alert('enter gender')
    } else if (medicalHistory.length === 0) {
      alert('enter medicalHistory')
    } else if (status.length === 0) {
      alert('enter status')
    } else if (other.length === 0) {
      alert('enter other')
    } else if (!image) {
      alert('select image File')
    } else {
      const data = new FormData()
      data.append('name', name)
      data.append('age', age)
      data.append('bloodGroup', bloodGroup)
      data.append('colourComplexity', colourComplexity)
      data.append('deficiency', deficiency)
      data.append('education', education)
      data.append('gender', gender)
      data.append('medicalHistory', medicalHistory)
      data.append('other', other)
      data.append('status', status)
      data.append('user_id', user1.id)
      data.append('image', image)
     
      sessionStorage.setItem('child', JSON.stringify(data.data));
      // send the Child info to the API
      axios.post('http://localhost:8081/admin' + '/addchild', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('successfully added new child to the list')
          console.log(user1.id)
          history.push('/admin-dash')
        } else {
          console.log(result.error)
          alert('error while adding the child to the list')
        }
      })
    }
  }

  return (
    <div>
    <div className="container" ><br></br>
      <h1 className="page-title">Add Child</h1>

      <div className="col-10">
          <div className="mb-3">
        <label htmlFor="">Child Image</label>
        <input
          accept="image/*"
          onChange={onFileSelect}
          type="file"
          className="form-control"
        />
      </div></div>


      <div className="col-10">
      <div className="mb-3">
      <label htmlFor="">Gender</label>
                <br></br>
               
                  <Input input
              onChange={(e) => {
                setGender(e.target.value)
              }}
                  type="select" id="gender" >
                    <option>Male</option>
                    <option>Female</option>
                  </Input>
                
            </div>

        
          <div className="mb-3">
            <label htmlFor="">Name</label>
            <input
              onChange={(e) => {
                setName(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Age</label>
            <input
              onChange={(e) => {
                setAge(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Blood Group</label>
            <input
              onChange={(e) => {
                setBloodGroup(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Colour Complexity</label>
            <input
              onChange={(e) => {
                setColourComplexity(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Deficiency</label>
            <input
              onChange={(e) => {
                setDeficiency(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Education</label>
            <input
              onChange={(e) => {
                setEducation(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

      
          <div className="mb-3">
            <label htmlFor="">Medical History</label>
            <input
              onChange={(e) => {
                setMedicalHistory(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Other</label>
            <input
              onChange={(e) => {
                setOther(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Status</label>
            <input
              onChange={(e) => {
                setStatus(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

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
            <button onClick={addChildToDB} className="btn btn-success">
              Submit
            </button>{'   '}
            </div>
            <Link to="/admin-dash">
              <a className="btn btn-warning">Back</a>
            </Link></div><br></br>
        </div><br></br>
        
      </div><Footer /></div>
  )
}

export default Achild

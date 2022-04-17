import axios from 'axios'
import { useState, useEffect } from 'react'
import Footer from '../../../layout/Footer'
import { Link } from 'react-router-dom'
//import AdminFunctions from '../../../../Axios/AdminAxios'
import ChildRow from './ChildRow'

const Childs = () => {
 
  const [child, setChild] = useState([])

 
  useEffect(() => {
    console.log(`Childs got loaded`)
    getChilds()
  }, [])

 

  const getChilds = () => {
    axios.get("http://localhost:8081/admin/achilddetails").then((response) => {
     // AdminFunctions.getAllChilds().then((response) => {
      const result = response.data
      console.log(child.image)
      console.log(child.childId)
      if (result.status === 'success') {
        setChild(result.data)
        
      } else {
        alert('error while loading list of Childs')
      }
    })
  }

  return (
    <div >
      <h1 className="page-title">All Childs</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Child Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>bloodGroup</th>
            <th>Colour Complexity</th>
            <th>Deficiency</th>
            <th>Education</th>
            <th>Gender</th>
            <th>MedicalHistory</th>
            <th>Other</th>
            <th>Status</th>
            <th>Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {child.map((child) => {
            return <ChildRow child={child} />
          })}
          <br></br>
        
        </tbody>
        <Link to="/admin-dash">
              <a className="btn btn-warning">Back</a>
            </Link>
      </table>  <Footer />
    </div>
  )
}

export default Childs

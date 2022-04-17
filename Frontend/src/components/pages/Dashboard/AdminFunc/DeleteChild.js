import axios from "axios";
import { useState, useEffect } from 'react'
import {  useHistory, useParams } from 'react-router-dom'

const DeleteChild=()=>{
    const {id} = localStorage.getItem("childId")
  // alert(localStorage.getItem("productid"))
  const history = useHistory()

  useEffect(()=>{
    console.log('http://localhost:8081/admin/' + localStorage.getItem("childId"))
     loadChild();
  },[]);
 

 

 const loadChild = () =>{
    console.log('http://localhost:8081/admin/' + localStorage.getItem("childId"))
     axios.delete('http://localhost:8081/admin/' + localStorage.getItem("childId")).then((response)=>{
     const result = response.data
     console.log(result)
     if (result.status === 'success') {
       alert(result.data )
          
       history.push("/aviewchilds")
     } else {
       alert('error while loading list of Childs')
     }
   })
     }
    
   return(
     <h2>Child Deleted</h2>
   )
}

export default DeleteChild
import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {NavLink,Link} from "react-router-dom"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AirRoger.css"
const AddWaapOwner = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [information, setInformation] = useState("")
    const navigate = useNavigate()


    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/newOwner`, {
            fullName,
            email,
            information,
        }, {withCredentials:true})
        .then((res)=>{
            console.log(res)
        navigate(-1)
        })
        .catch(err=> setErrors(err.res.data.errors))
        
    }




  return (
    <div>
      <div className='display-flex3'>
   <form onSubmit={submitHandler}>
        <div className="form-group row">
            <label>Full Name</label>
            <input onChange={(e)=>setFullName(e.target.value)}
            type="text" value={fullName} className="form-control" name="fullName"/>
        </div>
        <div className="form-group row">
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)}
            type="text" value={email} className="form-control" name="email"/>
        </div>
        <div className="form-group row">
            <label>Information</label>
            <textarea onChange={(e)=>setInformation(e.target.value)}
            type="text" value={information} className="form-control" name="information"/>
            <input type="submit" value="Add" />
        </div>
    </form>
    
</div>
    </div>
  )
}

export default AddWaapOwner
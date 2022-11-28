import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AirRoger.css"
import {NavLink,Link} from "react-router-dom"
import Form from 'react-bootstrap/Form'

const CreateSouthTower = ({isLoggedIn, setIsLoggedIn}) => {

    const[locationOfPlane, setLocationOfPlane] = useState("")
    const[area, setArea] = useState("")
    const[tailNumber, setTailNumber] = useState("")
    const[airplaneType, setAirPlaneType] = useState("")
    const[fuelType, setFuelType] = useState("")
    const[fuelOrder, setFuelOrder] = useState("")
    const[positivePrist, setPositivePrist] = useState("")
    const[checkName, setCheckName] = useState("")
    const [error, setError] = useState({})
    const navigate= useNavigate()
    const [user, setUser] = useState()
    
    
    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/southTowerArea', {
            locationOfPlane,
            area,
            tailNumber,
            airplaneType,
            fuelType,
            fuelOrder,
            positivePrist,
            checkName
        })
        .then((res)=>{
            console.log(res)
        // setLocationOfPlane('')
        // setArea('Air-Roger')
        // setTailNumber('')
        // setAirPlaneType('')
        // setFuelType('')
        // setFuelOrder('')
        // setPositivePrist('NA')
        // setCheckName('')
        navigate('/accountList/towerLocations/southTower')
        })
        .catch((err)=>{
            console.log(err)
           //  console.log("err.response", err.response)
           //  console.log("err.response.data", err.response.data)
            console.log("err.response.data.errors", err.response.data.errors)
           //  console.log("err.res.errors", err.res.data.errors)
       
            setError(err.response.data.errors)
           })
        
    }

    useEffect(()=>{axios.get("http://localhost:8000/api/currentUser", {withCredentials:true})
    .then((res)=>{
      console.log(res)
      console.log(res.data)
      setUser(res.data)
    })
      .catch((err)=>console.log(err))
    
    
    }, [isLoggedIn])
    


  return (
    <div>
    { user ? (
<div className='display-flex3'>
        <form onSubmit={submitHandler}>
        <div className="form-group row">
            <label>Area</label>
            <select value ={area} className="form-control" name="area" onChange={(e)=> setArea(e.target.value)}>
                <option>Area</option>
                <option value="South Tower">South Tower</option>
                

            </select>
            {
              error.area?
              <span>{error.area.message}</span>
              :null
            }
        </div>
        <div className="form-group row">
            <label>Tail Number</label>
            <input onChange={(e)=>setTailNumber(e.target.value)}
            type="text" value={tailNumber} className="form-control" name="tailNumber"/>
            {
              error.tailNumber?
              <span>{error.tailNumber.message}</span>
              :null
            }
        </div>
        <div>
             <label className="form-group row">Parking Spot</label>
            <input onChange={(e)=>setLocationOfPlane(e.target.value)}
            type="text" value={locationOfPlane} className="form-control" name="locationOfPlane"/>
            {
                  error.locationOfPlane?
              <span>{error.locationOfPlane.message}</span>
              :null
            }
        </div>
            <div>
            <label className="form-group row">Fuel Type</label>
            <select value ={fuelType} name="fuelType" className='form-control' onChange={(e)=> setFuelType(e.target.value)}>
                <option>Fuel Type</option>
                <option value="Avgas 100LL">Avgas 100LL</option>
                <option value="Jet-A">Jet-A</option>
                <option value="94 unleaded">94 unleaded</option>
                
            </select>
            {
                  error.fuelType?
              <span>{error.fuelType.message}</span>
              :null
            }
        </div>
        <div>
             <label className="form-group row">Fuel Order</label>
            <input onChange={(e)=>setFuelOrder(e.target.value)}
            type="text" value={fuelOrder} className="form-control" name="fuelOrder"/>
             {
                error.fuelOrder?
              <span>{error.fuelOrder.message}</span>
              :null
            }
        </div>
        <div>
            <label className="form-group row">Positive Prist</label>
            <select value ={positivePrist} name="positivePrist" className='form-control' onChange={(e)=> setPositivePrist(e.target.value)}>
                <option>Prist Type</option>
                <option value="Positive">Positive</option>
                <option value="Negative">Negative</option>
                <option value="NA">NA</option>
                
            </select>
            {
                error.positivePrist?
              <span>{error.positivePrist.message}</span>
              :null
            }
        </div>
        <div className="form-group row">
             <label>Check Name</label>
            <input onChange={(e)=>setCheckName(e.target.value)}
            type="text" value={checkName} className="form-control" name="checkName"/>
        </div>
        <input type="submit" value="Add to list" />
        <Link to={'/accountList/towerLocations/southTower'} className="homeBtn">Back</Link>

        </form>
        </div>
        ):(
        <div>
          <NavLink to="/">Login</NavLink>
                <span> | </span>
          <NavLink to="/">Register</NavLink>
        </div>       
    )}
    </div>
  )
}

export default CreateSouthTower
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AirRoger.css"
import {Link} from "react-router-dom"
import Form from 'react-bootstrap/Form'


const CreateExecutiveRamp = () => {


    const[locationOfPlane, setLocationOfPlane] = useState("")
    const[area, setArea] = useState("")
    const[tailNumber, setTailNumber] = useState("")
    const[airplaneType, setAirPlaneType] = useState("")
    const[fuelAmount, setFuelAmount] = useState("")
    const[fuelType, setFuelType] = useState("")
    // const[fuelOrder, setFuelOrder] = useState("")
    const[positivePrist, setPositivePrist] = useState("")
    const[dateArrived, setDateArrived] = useState('')
    const[rampFeeCost, setRampFeeCost] = useState("")
    const[timeArrived, setTimeArrived] = useState("")
    // const[checkName, setCheckName] = useState("")
    const [error, setError] = useState({})
    const navigate= useNavigate()
    const[dwad,setdwad] = useState('')
    
    
    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/executiveRampArea', {
            locationOfPlane,
            area,
            tailNumber,
            airplaneType,
            fuelType,
            fuelAmount,
            // fuelOrder,
            positivePrist,
            dateArrived,
            timeArrived,
            rampFeeCost,
            // checkName
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
        navigate('/accountList/terminalLocations/executiveRamp')
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
  
  




  return (
    <div>
<div className='display-flex3'>
        <form onSubmit={submitHandler}>
        <div className="form-group row">
            <label>Area</label>
            <select value ={area} className="form-control" name="area" onChange={(e)=> setArea(e.target.value)}>
                <option>Area</option>
                <option value="Executive Ramp">Executive Ramp </option>
                

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
             <label className="form-group row">Airplane Type</label>
            <input onChange={(e)=>setAirPlaneType(e.target.value)}
            type="text" value={airplaneType} className="form-control" name="airplaneType"/>
        </div>
            <div>
            <label className="form-group row">Fuel Type</label>
            <select value ={fuelType} name="fuelType" className='form-control' onChange={(e)=> setFuelType(e.target.value)}>
                <option>Fuel Type</option>
                <option value="Avgas 100LL">Avgas 100LL</option>
                <option value="Jet-A">Jet-A</option>
                <option value="94 unleaded">94 unleaded</option>
                
            </select>
        </div>
        <div>
             <label className="form-group row">Fuel Amount</label>
            <input onChange={(e)=>setFuelAmount(e.target.value)}
            type="text" value={fuelAmount} className="form-control" name="fuelAmount"/>
        </div>
        <div>
            <label className="form-group row">Positive Prist</label>
            <select value ={positivePrist} name="positivePrist" className='form-control' onChange={(e)=> setPositivePrist(e.target.value)}>
                <option>Prist Type</option>
                <option value="Positive">Positive</option>
                <option value="Negative">Negative</option>
                <option value="NA">NA</option>
                
            </select>
        </div>
        <div className="form-group row">
             <label>Date Arrived</label>
            <input onChange={(e)=>setDateArrived(e.target.value)}
            type="date" value={dateArrived} className="form-control" name="dateArrived"/>
        </div>
        <div className="form-group row">
             <label>Time Arrived</label>
            <input onChange={(e)=>setTimeArrived(e.target.value)}
            type="time" value={timeArrived} className="form-control" name="timeArrived"/>
        </div>
        <div className="form-group row">
             <label>Ramp Fee</label>
            <input onChange={(e)=>setRampFeeCost(e.target.value)}
            type="text" value={rampFeeCost} className="form-control" name="rampFeeCost"/>
        </div>
        <input type="submit" value="Add to list" />
        <Link to={'/accountList/terminalLocations/executiveRamp'} className="homeBtn">Back</Link>

        </form>
        </div>
    </div>

  )
}

export default CreateExecutiveRamp

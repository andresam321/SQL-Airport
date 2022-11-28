import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import "./AirRoger.css"
import Form from 'react-bootstrap/Form'


const EditNorthwestOverrun = () => {


    const{id} = useParams();
    const[locationOfPlane, setLocationOfPlane] = useState()
    const[area, setArea] = useState("")
    const[tailNumber, setTailNumber] = useState("")
    // const[airplaneType, setAirPlaneType] = useState("")
    const[fuelType, setFuelType] = useState("")
    const[fuelOrder, setFuelOrder] = useState("")
    const[positivePrist, setPositivePrist] = useState("")
    const[checkName, setCheckName] = useState("")
    const [oneInput,setOneInput] = useState([])
    const navigate = useNavigate();
    
    useEffect(()=>{axios.get(`http://localhost:8000/api/nwo/${id}`)
    .then((res)=>{
        console.log(res)
        setLocationOfPlane(res.data.locationOfPlane)
        setArea(res.data.area)
        setTailNumber(res.data.tailNumber)
        setFuelType(res.data.fuelType)
        setFuelOrder(res.data.fuelOrder)
        setPositivePrist(res.data.positivePrist)
        setCheckName(res.data.checkName)
        // setOneInput(res.data)
        
    })
        .catch((err)=>console.log(err))
    
    }, [])
    
    const updateNorthwestOverrun = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/nwo/${id}`, {
            area,
            locationOfPlane,
            tailNumber,
            fuelType,
            fuelOrder,
            positivePrist,
            checkName
        })
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            navigate("/accountList/towerLocations/northwestOverrun")
        })
    }
    


return (
    <div>
   <form onSubmit={updateNorthwestOverrun}>
        <div className="form-group row">
            <label className='class="col-sm-2 col-form-label'>Area</label>
            <h3 className="form-control-plaintext">{area}</h3>
        </div>
        <div className="form-group">
            <label>Tail Number</label> 
            <input onChange={(e)=>setTailNumber(e.target.value)}
            type="text" value={tailNumber} className="form-control" name="tailNumber"/>
        </div>
        <div className="form-group">
            <label>Parking Spot</label> 
            <input onChange={(e)=>setLocationOfPlane(e.target.value)}
            type="text" value={locationOfPlane} className="form-control" name="locationOfPlane"/>
        </div>
        <div className="form-group">
            <label>Fuel Type</label>
            <select value ={fuelType} className="form-control" name="fuelType" onChange={(e)=> setFuelType(e.target.value)}>
                {/* <option>Fuel Type</option> */}
                <option value="Avgas 100LL">Avgas 100LL</option>
                <option value="Jet-A">Jet-A</option>
                <option value="94 unleaded">94 unleaded</option>
            </select>
        </div>
        <div>
            <label className="form-group">Fuel Order</label> 
            <input onChange={(e)=>setFuelOrder(e.target.value)}
            type="text" value={fuelOrder} className="form-control" name="fuelOrder"/>
        </div>
        <div>
             <label className="form-group">Positive Prist</label>
            <select value ={positivePrist} className="form-control" name="positivePrist" onChange={(e)=> setPositivePrist(e.target.value)}>
                <option value="Positive">Positive</option>
                <option value="Negative">Negative</option>
                <option value="NA">NA</option>
                
            </select>
        </div>
        <div>
            <label className="form-group">Owner Name</label> 
            <input onChange={(e)=>setCheckName(e.target.value)}
            type="text" value={checkName} className="form-control" name="checkName"/>
        </div>
    
        <input type="submit" value="Update Info" />
        <Link to={'/accountList/towerLocations/northwestOverrun'} className="homeBtn">Back</Link>
                       
                    
                    
</form> 

        
    </div>
  )
}

export default EditNorthwestOverrun
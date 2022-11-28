import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const ExecutiveRamp = ({isLoggedIn, setIsLoggedIn}) => {

    const [executiveRamp, setExecutiveRamp]= useState([]);
    const [tailNumber, setTailNumber] = useState([])
    const {REACT_APP_API_KEY} = process.env;
    const [user, setUser] = useState()
    
    useEffect(()=>{axios.get("http://localhost:8000/api/executiveRamp")
      .then((res)=>{
        console.log(res)
        console.log(res.data)
        setExecutiveRamp(res.data)
      })
        .catch((err)=>{console.log(err)
      })
    
    }, [])

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
    <div>
    { user ? (
    <div className="header">
      <Link to={'/accountList'} className="homeBtn">Home</Link> 
      <Link to={'/accountList/towerLocations'} className="active">Tower Side Parking</Link> 
      <Link to={'/accountList/terminalLocations'} className="active">Terminal Side Parking</Link>    
    <div class="header-right">
    
      <Link to={'/executiveRampCreate'} className="active">Add a tail # </Link>
      </div>
    </div>
    ):(
          <div>
              <NavLink to="/">Login</NavLink>
                    <span> | </span>
              <NavLink to="/">Register</NavLink>
          </div> 
    
    )}

</div>
<div>
{ user ? (
<table className="table">
  <thead>
    <tr>
      <th scope="col">Area</th>
      <th scope="col">Tail Number</th>
      <th scope="col">Airplane Type</th>
      <th scope="col">Fuel Type</th>
      <th scope="col">Fuel Amount</th>
      <th scope="col">Positive Prist?</th>
      <th scope="col">Date Arrived</th>
      <th scope="col">Time Arrived</th>
      <th scope="col">Ramp Fee</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {executiveRamp.map((plane,index)=>{
      
      return (
    <tr key ={plane._id}>
      <td>{plane.area}</td>
      <td>{plane.tailNumber}</td>
      <td>{plane.airplaneType}</td>
      <td>{plane.fuelType}</td>
      <td>{plane.fuelAmount}</td>
      <td>{plane.positivePrist}</td>
      <td>{plane.dateArrived}</td>
      <td>{plane.timeArrived}</td>
      <td>{plane.rampFeeCost}</td>
      <td>
        <button><Link to={`/bayRamp/${plane._id}`}>View</Link></button> 
        <button><Link to={`/bayRamp/edit/${plane._id}`}>Edit</Link></button>
        {/* <button onClick={()=> deleteInput(plane._id)}>Delete</button> */}
    </td>
    </tr>
      )  
    })
    
    }
    

  </tbody>
</table>
    ):(
        <div>
              <NavLink to="/">Login</NavLink>
                    <span> | </span>
              <NavLink to="/">Register</NavLink>
        </div> 
      )}
    </div>

    </div>
    
  )
}

export default ExecutiveRamp
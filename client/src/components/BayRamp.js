import React, {useState, useEffect} from 'react'
import axios from "axios"
import {NavLink, Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const BayRamp = ({isLoggedIn, setIsLoggedIn}) => {

    const [bayRamp, setBayRamp]= useState([]);
    const [tailNumber, setTailNumber] = useState([])
    const {REACT_APP_API_KEY} = process.env;
    const [user, setUser] = useState()
    const navigate = useNavigate();
    
    useEffect(()=>{axios.get("http://localhost:8000/api/bayRamp")
      .then((res)=>{
        console.log(res)
        console.log(res.data)
        setBayRamp(res.data)
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
    

    const handleLogout = () =>{
      axios.post("http://localhost:8000/api/user/logout",{}, {withCredentials:true})
      .then((res)=>{
        setUser(null)
        
        navigate('/');
    
      })
      .catch((err)=> console.log(err))
    }


  return (
    <div>
    { user ? (
<div className="header">

    <Link to={'/accountList'} className="homeBtn">Home</Link> 
    <Link to={'/accountList/towerLocations'} className="active">Tower Side Parking</Link> 
    <Link to={'/accountList/terminalLocations'} className="active">Terminal Side Parking</Link>    
  <div class="header-right">
    
    <Link to={'/bayRampCreate'} className="active">Add a tail # </Link>
    <button onClick={handleLogout}>Logout</button>
    
  </div>
</div>
   ):(
          <div>
              <NavLink to="/">Login</NavLink>
                    <span> | </span>
              <NavLink to="/">Register</NavLink>
          </div> 
    
    )}


    
{ user ? (
<table className="table">
  <thead>
    <tr>
      <th scope="col">Area</th>
      <th scope="col">Tail Number</th>
      <th scope="col">Location</th>
      <th scope="col">Fuel Type</th>
      <th scope="col">Fuel Order</th>
      <th scope="col">Positive Prist?</th>
      <th scope="col">Check Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {bayRamp.map((plane,index)=>{
      
      return (
    <tr key ={plane._id}>
      <td>{plane.area}</td>
      <td>{plane.tailNumber}</td>
      <td>{plane.locationOfPlane}</td>
      <td>{plane.fuelType}</td>
      <td>{plane.fuelOrder}</td>
      <td>{plane.positivePrist}</td>
      <td>{plane.checkName}</td>
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
  )
}

export default BayRamp
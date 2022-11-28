import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const NorthTower = ({isLoggedIn, setIsLoggedIn}) => {



  const [northTower, setNorthTower]= useState([]);
  const [user, setUser] = useState()
  const navigate = useNavigate();
  // const {airRogerList, setAirRogerList}= props;


  
  useEffect(()=>{axios.get("http://localhost:8000/api/northTower", {withCredentials:true})
    .then((res)=>{

      console.log(res.data)
      setNorthTower(res.data)
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
    <input type="text" placeholder="Search..Coming Soon" name="search"></input>    
  <div class="header-right">
    
    <Link to={'/northTowerCreate'} className="active">Add a tail #</Link>
    
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
      {/* <th scope="col">Flight Status</th> */}
      <th scope="col">Actions</th>
      
    </tr>
  </thead>
  <tbody>
    {northTower.map((plane,index)=>{
      
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
        <button><Link to={`/northTower/${plane._id}`}>View</Link></button> 
        <button><Link to={`/northTower/edit/${plane._id}`}>Edit</Link></button>
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

export default NorthTower
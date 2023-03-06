
import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AirRoger.css"


const AirRoger = ({isLoggedIn, setIsLoggedIn}) => {

const navigate = useNavigate();

const [airRogerList, setAirRogerList]= useState([]);
const [user, setUser] = useState()
const [search, setSearch] = useState("")




// const [ownersInfo, setOwnersInfo]= useState=([])
// const {airRogerList, setAirRogerList}= props;
const [tailNumber, setTailNumber] = useState([])
const {REACT_APP_API_KEY} = process.env;
const handleLogout = () =>{
  axios.post("http://localhost:8000/api/user/logout",{}, {withCredentials:true})
  .then((res)=>{
    setUser(null)
    
    navigate('/');

  })
  .catch((err)=> console.log(err))
}
useEffect(()=>{axios.get("http://localhost:8000/api/airRogers", {withCredentials:true})
  .then((res)=>{
    console.log(res.AirRoger)
    console.log(res.data)
    setAirRogerList(res.data)
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


// const deleteInput = (id)=>{
//   axios.delete(`http://localhost:8000/api/input/${id}`)
//   .then((res)=>{
//     console.log(res)
//     console.log("success deleting input", res)
//     const filteredInputs = airRogerList.filter((input)=>{
//       return input._id !== id;
//         })

//         setAirRogerList(filteredInputs)
//   })
//   .catch((err)=>{console.log(err)
//   console.log("error in deleting input", err)
// })
// }



  return (
  <div>
    <div>
    { user ? (
      <div className="header"> 
      {/* { user ? ( */}
          <Link to={'/accountList'} className="homeBtn">Home</Link> 
          <Link to={'/accountList/towerLocations'} className="active">Tower Side Parking</Link> 
          <Link to={'/accountList/terminalLocations'} className="active">Terminal Side Parking</Link>
        <input type="text" placeholder="Search..Coming Soon" name="search"></input>    
        <div class="header-right">
          <Link to={'/airRogerCreate'} className="active">Add a tail # to Air Roger account list</Link>
          {/* <button onClick={handleLogout}>Logout</button> */}
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
    {/* { user ? ( */}
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
        {airRogerList.map((plane,index)=>{
          
          return (
        <tr key ={plane._id}>
          <td onDblClick ="document.body.style.backgroundColor ='#000';">{plane.area}</td>
          <td>{plane.tailNumber}</td>
          <td>{plane.locationOfPlane}</td>
          <td>{plane.fuelType}</td>
          <td>{plane.fuelOrder}</td>
          <td>{plane.positivePrist}</td>
          <td>{plane.checkName}</td>
          <td>
            <button><Link to={`/airRogerPlane/${plane._id}`}>View</Link></button> 
            <button><Link to={`/airRogerPlane/edit/${plane._id}`}>Edit</Link></button>
            {/* <button onClick={()=> deleteInput(plane._id)}>Delete</button> */}
        </td>
        </tr>
          )  
        })
        
        }
        </tbody>
    </table>
      {/* ):(
        <div>
              <NavLink to="/">Login</NavLink>
                    <span> | </span>
              <NavLink to="/">Register</NavLink>
        </div> 
      )} */}
    </div>


  </div>
  )
}

export default AirRoger
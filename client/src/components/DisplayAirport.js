import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./airport.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
// import images from "../images/sql-tower-side.jpeg"

const DisplayAirport = ({isLoggedIn, setIsLoggedIn}) => {

const [user, setUser] = useState()
const navigate = useNavigate();


  const handleLogout = () =>{
    axios.post("http://localhost:8000/api/user/logout",{}, {withCredentials:true})
    .then((res)=>{
      setUser(null)
      
      navigate('/');

    })
    .catch((err)=> console.log(err))
  }
    // window.onClick = function(e) {
    //     if (!e.target.matches('.dropbtn')) {
    //     var myDropdown = document.getElementById("myDropdown");
    //       if (myDropdown.classList.contains('show')) {
    //         myDropdown.classList.remove('show');
    //       }
    //     }
    //   }

  
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
        <h1>SQL ACCOUNT LIST</h1>
        <button onClick={handleLogout}>Logout</button>
        {user ? (

      <div className="displayFlex">
          WELCOME{user.firstName}
          <div className="box1">
            <h1>
            <Link to="towerLocations">Tower side</Link>
            </h1>
            <div className="">
              <img src="sql-tower-side.jpeg" alt="tower"></img>

            </div>
          </div>
          <div className="box2">
              <h1>
              <Link to="terminalLocations">Terminal Side</Link>
              </h1>
            <div className="">
                <img src="san-carlos-airport-performance-impressions.jpeg" alt="tower"></img>
            </div>
          </div>
          <button onClick={handleLogout}>Logout</button>
          {/* ):( */}
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

export default DisplayAirport
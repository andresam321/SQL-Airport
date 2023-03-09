import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./towerLocation.css"
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';



const DisplayLocations = ({isLoggedIn, setIsloggedIn}) => {



const [user, setUser] = useState(null)
const navigate = useNavigate();

//   useEffect(()=>{axios.get("http://localhost:8000/api/currentUser", {withCredentials:true})
//   .then((res)=>{
//     console.log(res)
//     console.log(res.data)
//     setUser(res.data)
//   })
//     .catch((err)=>{console.log(err)
//   })

// }, [isLoggedIn])


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
      <div>
        
      {/* {user ? ( */}
      <div>
            <div className='display-Header'>
              <Link to={'/accountList'} className="homeBtn">Home</Link> 
              <h1>Currently Viewing: Tower Side Parking</h1>
              <Link to={'/accountList/terminalLocations'} className="homeBtn">Terminal Side Parking</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          <div className="display-flex">
            <div className="tbox1">
              <Link to="airRoger">Air Roger</Link>
            </div>
            <div className="tbox2">
            <Link to="thirteenThroughFifteenHangars">13-15 Hangars</Link>
            </div>
            <div className="tbox3">
            <Link to="wingAnPrayer">Wing an a Prayer</Link>
            </div>
            <div className="tbox4">
            <Link to="southTower">South Tower</Link>
            </div>
            <div className="tbox5">
            <Link to="northTower">North Tower</Link>
            </div>
            <div className="tbox6">
            <Link to="svaHangar">SVA Hangar</Link>
            </div>
            <div className="tbox7">
            <Link to="tenEleven">10-11 Hangars</Link>
            </div>
            <div className="tbox8">
            <Link to="skywayHolding">Skyway Holding Parking</Link>
            </div>
            <div className="tbox9">
            <Link to="hillerAviation">Hiller Aviation</Link>
            </div>
            <div className="tbox10">
            <Link to="northwestOverrun">NorthWest Overrun</Link>
            </div>
          </div>
    </div>
      {/* ):(
        <NavLink to="/">Login</NavLink>
      )} */}
  </div>
</div>
  )
}

export default DisplayLocations
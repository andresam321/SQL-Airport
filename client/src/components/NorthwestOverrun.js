import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
const NorthwestOverrun = () => {

  const [northwestOverrun, setNorthwestOverrun]= useState([]);
  // const {airRogerList, setAirRogerList}= props;

  const {REACT_APP_API_KEY} = process.env;
  
  useEffect(()=>{axios.get("http://localhost:8000/api/nwo")
    .then((res)=>{

      console.log(res.data)
      setNorthwestOverrun(res.data)
    })
      .catch((err)=>{console.log(err)
    })
  
  }, [])



  return (
    <div>
  <div className="header">
    <Link to={'/accountList'} className="homeBtn">Home</Link> 
    <Link to={'/accountList/towerLocations'} className="active">Tower Side Parking</Link> 
    <Link to={'/accountList/terminalLocations'} className="active">Terminal Side Parking</Link>
    <input type="text" placeholder="Search..Coming Soon" name="search"></input>    
  <div class="header-right">
    
    <Link to={'/northwestOverrunCreate'} className="active">Add a tail #</Link>
    
  </div>
</div>
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
    {northwestOverrun.map((plane,index)=>{
      
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
        <button><Link to={`/northwestOverrun/${plane._id}`}>View</Link></button> 
        <button><Link to={`/northwestOverrun/edit/${plane._id}`}>Edit</Link></button>
        {/* <button onClick={()=> deleteInput(plane._id)}>Delete</button> */}
    </td>
    </tr>
      )  
    })
    
    }
    

  </tbody>
</table>
    </div>
  )
}

export default NorthwestOverrun
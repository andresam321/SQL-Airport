import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AirRoger.css"

const OwnersInfo = () => {

  const [ownersInfo, setOwnersInfo] = useState([])

useEffect(()=>{axios.get("http://localhost:8000/api/ownersInfo",{withcredentials:true})
.then((res)=>{
  console.log(res)
  setOwnersInfo(res.data)
})
.catch((err)=>{console.log(err)
  })
}, [])



  return (
    <div>
         <table className="table">
        <thead>
          <tr>
            <th scope="col">Owners Name</th>
            <th scope="col">Tail Number</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Business Address</th>
            <th scope="col">Residential Address</th>
            <th scope="col">Payment Type</th>
            <th scope="col">Payment Info</th>
            <th scope="col">Notes</th>
            <th scope="col">Actions</th>
          
          </tr>
        </thead>
        <tbody>
        {ownersInfo.map((owner,index)=>{
          
          return (
        <tr key ={owner._id}>
          <td onDblClick ="document.body.style.backgroundColor ='#000';">{owner.area}</td>
          <td>{owner.ownersName}</td>
          <td>{owner.tailNumber}</td>
          <td>{owner.phoneNumber}</td>
          <td>{owner.businessAddress}</td>
          <td>{owner.residentialAddress}</td>
          <td>{owner.paymentType}</td>
          <td>{owner.paymentInfo}</td>
          <td>{owner.notes}</td>
          <td>
            <button><Link to={`/airRogerPlane/${owner._id}`}>View</Link></button> 
            <button><Link to={`/airRogerPlane/edit/${owner._id}`}>Edit</Link></button>
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
    
  )
}

export default OwnersInfo
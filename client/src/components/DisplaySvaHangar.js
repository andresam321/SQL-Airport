import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import formatDistance from 'date-fns/formatDistance'
import {NavLink,Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AirRoger.css"

const DisplaySvaHangar = ({isLoggedIn, setIsLoggedIn}) => {

    const {fullName, setFullName} = useState([])
    const {email, setEmail} = useState([])
    const {information, setInformation} = useState([])
    const [allOwnersInfo, setAllOwnersInfo ] = useState([])
    const [user, setUser] = useState()
        
        
        
    const {id} = useParams();
    const [oneInput,setOneInput] = useState([])
        // const [owners, setOwners] = useState=([])
        // const [information, setInformation] = useState('')
        // const [custInfo, setCustInfo] = useState("")
    const [errors, setErrors] = useState("")
        //  const [notes, setNotes] = useState("")
        //  const [no, setNo] = useState("")
    
        // const [notes, setNotes] = useState("")
        // const [custInfo, setCustInfo] = useState[[]]
    const navigate = useNavigate()
    
    const deleteButton=()=>{
        axios.delete(`http://localhost:8000/api/svaHangar/${id}`)
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            
            navigate("/accountList/towerLocations/svaHangar")
        })
        .catch((err)=>{
            console.log(err)
        });
    }
    
    useEffect(()=>{axios.get(`http://localhost:8000/api/owner/${id}`)
        .then((res)=>{console.log(res.data)
        // setFullName(res.data)
        // setEmail(res.data)
        // setInformation(res.data)
        // // setOwners(res.data)
        setAllOwnersInfo(res.data)
    
     })
    .catch((err)=>{console.log(err)})
    }, [])
    
    
    
    
    useEffect(()=>{axios.put(`http://localhost:8000/api/svaHangar/${id}`)
        .then((res)=>{console.log(res.data)
        setOneInput(res.data)
        // setOwners(res.data)
     })
    .catch((err)=>{console.log(err)})
    }, [id])
    
    
    
    
    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/owner/${id}`, {
            fullName,
            email,
            information,
        })
        .then((res)=>{
            console.log(res)
        // navigate('/towerLocations/airRoger')
        })
        .catch(err=> setErrors(err.res.data.errors))
        
    }
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
    { user ? (
<table className='table'>
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
                    <tr>
                    <td>{oneInput.area}</td>
                    <td>{oneInput.tailNumber}</td>
                    <td>{oneInput.locationOfPlane}</td>
                    <td>{oneInput.fuelType}</td>
                    <td>{oneInput.fuelOrder}</td>
                    <td>{oneInput.positivePrist}</td>
                     <td>{oneInput.checkName}</td>
                     <td><button onClick={(deleteButton)}>Delete</button>
                     <Link to={'/accountList/towerLocations/svaHangar'} className="homeBtn">Back</Link>
                     </td>
                    </tr>
                </tbody>
        </table>
        ):(
        <div>
          <NavLink to="/">Login</NavLink>
                <span> | </span>
          <NavLink to="/">Register</NavLink>
        </div>       
    )}
    {user ? (
<div className='display-flex3'>
   <form onSubmit={submitHandler}>
        <div className="form-group row">
            <label>Full Name</label>
            <input onChange={(e)=>setFullName(e.target.value)}
            type="text" value={fullName} className="form-control" name="fullName"/>
        </div>
        <div className="form-group row">
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)}
            type="text" value={email} className="form-control" name="email"/>
        </div>
        <div className="form-group row">
            <label>Information</label>
            <input onChange={(e)=>setInformation(e.target.value)}
            type="text" value={information} className="form-control" name="information"/>
            <input type="submit" value="Add" />
        </div>
    </form>
</div>
):(
        <div>
          <NavLink to="/">Login</NavLink>
                <span> | </span>
          <NavLink to="/">Register</NavLink>
        </div>       
    )}
    {user ? (
    <table className='table'>
            <thead>
                <tr>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Information</th>
                
                </tr>
            </thead>
            <tbody>
            {/* {allOwnersInfo.map((info, index)=>{  
              return ( */}
            {/* <tr key={`info`.airRoger_id}> */}
             <tr>
                <td>{allOwnersInfo.fullName}</td>
                <td>{allOwnersInfo.email}</td>
                <td>{allOwnersInfo.information}</td>
            </tr>
            {/* </tr>

            )}

            )
            }
     */}
 
            
  
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

export default DisplaySvaHangar
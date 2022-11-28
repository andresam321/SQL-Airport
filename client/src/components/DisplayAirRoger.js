import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import formatDistance from 'date-fns/formatDistance'
import {NavLink,Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AirRoger.css"

const DisplayAirRoger = (props) => {

    
// const dateStr = "2021-10-26T12:24:33.433+00:00";
// const str = formatDistance(new Date(dateStr),new Date());
const {isLoggedIn, setIsLoggedIn} = useState(null)
const [fullName, setfullName] = useState('')
const [email, setEmail] = useState('')
const [information, setInformation] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [allOwnersInfo, setAllOwnersInfo ] = useState('')
const [airRoger_id, setAirRoger_id] = useState('')

const [user, setUser] = useState()    
const {id} = useParams();
const [oneInput,setOneInput] = useState([])
const [owners, setOwners] = useState("")

const [errors, setErrors] = useState("")

const navigate = useNavigate()

const deleteOwner = ()=>{
  axios.delete(`http://localhost:8000/api/airRoger/${id}/${id}`)
  .then((res)=>{
    console.log(res)
    console.log("success deleting input", res)
    // const filteredInputs = owners.owners.filter((input)=>{
    //   return input.id !== id;
    //     })

    //     setOwners(filteredInputs)
    console.log(res)
   })
  .catch((err)=>{console.log(err)
  console.log("error in deleting input", err)
})
}



const deleteButton=()=>{
    axios.delete(`http://localhost:8000/api/airRoger/${id}`)
    .then((res)=>{
        console.log(res)
        console.log(res.data)
        
        navigate("/accountList/towerLocations/airRoger")
    })
    .catch((err)=>{
        console.log(err)
    });
}

// const deleteOwner=()=>{
//     axios.delete(`http://localhost:8000/api/owner/${id}`)
//     .then((res)=>{
//         console.log(res)
//         console.log(res.data)
//         console.log("success deleting owner")  
//     })
//     .catch((err)=>{
//         console.log(err)
//     });
// }

// useEffect(()=>{axios.get(`http://localhost:8000/api/ownersById`)
//     .then((res)=>{console.log(res.data)
//     setfullName(res.data)
//     setEmail(res.data)
//     setInformation(res.data)
//     // // setOwners(res.data)
//     // setAllOwnersInfo(res.data)

//  })
// .catch((err)=>{console.log(err)})
// }, [])




useEffect(()=>{axios.get(`http://localhost:8000/api/airRoger/${id}`)
    .then((res)=>{console.log(res.data)
    setOneInput(res.data)
    setOwners(res.data)
    // setOwners(res.data)
 })
.catch((err)=>{console.log(err)})
}, [id])




const submitHandler = (e) =>{
    e.preventDefault(e)
    axios.post(`http://localhost:8000/api/newOwner/${id}`, {
        fullName,
        email,
        phoneNumber,
        information,
        
       
    })
    .then((res)=>{
        console.log(res)
    // navigate(`/towerLocations/airRogerPlane/${id}`)
    })
    .catch(err=> setErrors(err))
    
}
// useEffect(()=>{axios.get(`http://localhost:8000/api/owner`)
//     .then((res)=>{console.log(res.data)


//  })
// .catch((err)=>{console.log(err)})
// }, [])
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
                     <Link to={'/accountList/towerLocations/airRoger'} className="homeBtn">Back</Link>
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


    {user && owners.owners ? (
<div className='display-flex3'>
   <form onSubmit={submitHandler}>
        <div className="form-group row">
            <label>Full Name</label>
            <input onChange={(e)=>setfullName(e.target.value)}
            type="text" value={fullName} className="form-control" name="fullName"/>
        </div>
        <div className="form-group row">
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)}
            type="text" value={email} className="form-control" name="email"/>
        </div>
        <div className="form-group row">
            <label>Phone Number</label>
            <input onChange={(e)=>setPhoneNumber(e.target.value)}
            type="number" value={phoneNumber} className="form-control" name="phoneNumber"/>
        </div>
        <div className="form-group row">
            <label>Information</label>
            <textarea onChange={(e)=>setInformation(e.target.value)}
            type="text" value={information} className="form-control" name="information"/>
            <input type="submit" value="Add" />
        </div>
        {/* <div className="form-group row">
            <label>id</label>
            <input onChange={(e)=>setAirRoger_id(e.target.value)}
            type="text" value={airRoger_id} className="form-control" name="information"/>
            <input type="submit" value="Add" />
        </div> */}
    </form>
</div>
):(
        <div>
          <NavLink to="/">Login</NavLink>
                <span> | </span>
          <NavLink to="/">Register</NavLink>
        </div>       
    )}
{user && owners.owners ? (
<div>
    {owners.owners.map((owner, index)=>{
        return (
        <div key={"owner_" + index}>
<div className='display-flex4'>
    {/* <div classname="boxdiv"> */}
    <div className="onebox">
        <div className='flex-between'>
            <label>Full Name: </label>
            <div className='between'>
                <label>{owner.fullName}</label>
            {/* <input type="text" value={owner.fullName} className="form-control" name="fullName"/> */}
            </div>
         </div>
        {/* <div className="onebox">  */}
        <div className='flex-between'>
            <label>Email:</label>
            <div className='between'>
                <label>{owner.email}</label>
            {/* <input type="text" value={owner.email} className="form-control" name="email"/> */}
            </div>
        </div>
        {/* <div className="onebox">  */}
        <div className='flex-between'>
            <label>Phone Number:</label>
            <div className='between'>
                <label>{owner.phoneNumber}</label>
            {/* <input type="tel" value="" className="form-control" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/> */}
            </div>
        </div>     
        {/* </div>
        <div className="onebox"> */}
        <div className='flex-between'>
            <label>Owner Information:</label>
            <div className='between'>
                <textarea classname="colorArea" rows="4" cols="50" value={owner.information}></textarea>
            </div>
        </div>
            {/* <textarea type="text" value={owner.information} classname="form-control" name=""/> */}
        {/* </div>
        <div className="onebox"> */}
        <div className='flex-between'>
            <label>Actions:</label>
            <div className='between'>
            <label>
            <button onClick={(deleteOwner)}>Delete Owner</button>
            <Link to={'/accountList/towerLocations/hillerAviation'} className="homeBtn">Back</Link></label>
            {/* <input type="text" value={information} className="form-control" name="information"/> */}
            </div>
        </div>
    </div>
</div>
    {/* </div> */}
</div>
        )
        }
    )} 
    </div>      
    
)

    :null
}        

    </div>
  )
}

export default DisplayAirRoger
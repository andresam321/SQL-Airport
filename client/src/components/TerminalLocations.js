import React from 'react'
// import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./towerLocation.css"
import { Link } from 'react-router-dom';

const TerminalLocations = () => {
  return (
    <div>
   <div>
      <div className="display-flex">
          
            <div className="tbox1">
              <Link to="jatoAviation">Jato Aviation</Link>
            </div>
            <div className="tbox2">
            <Link to="executiveRamp">Executive Ramp</Link>
            </div>
            <div className="tbox3">
            <Link to="bayRamp">Bay Ramp</Link>
            </div>
            <div className="tbox4">
            <Link to="tShadeRamp">T-Shade Ramp</Link>
            </div>
            <div className="tbox5">
            <Link to="oneTwoHangars">1-2 Hangars</Link>
            </div>
            <div className="tbox6">
            <Link to="threeSevenHangars">3-7 Hangars</Link>
            </div>
            <div className="tbox7">
            <Link to="eightNineHangars">8-9 Hangars</Link>
            </div>
            <div className="tbox8">
            <Link to="">Transient Parking</Link>
            </div>
            <div className="tbox9">
            <Link to=""></Link>
            </div>
            <div className="tbox10">
            <Link to=""></Link>
            </div>
    </div>
  </div>
    </div>
  )
}

export default TerminalLocations
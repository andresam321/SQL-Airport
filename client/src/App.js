import './App.css';
import Main from './views/Main';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { BrowserRouter as Router, Switch,  } from "react-router-dom";
import TowerLocations from './components/TowerLocations';
import AirRoger from './components/AirRoger';
import EditAirRoger from './components/EditAirRoger';
import CreateAirRoger from './components/CreateAirRoger';
import DisplayAirRoger from './components/DisplayAirRoger';
import HillerAviation from './components/HillerAviation';
import ThirteenThroughFifteenHangars from './components/ThirteenThroughFifteenHangars';
import CreateTfHangar from './components/CreateTfHangar';
import DisplayTfHangar from './components/DisplayTfHangar';
import EditTtFhangar from './components/EditTtFhangar';
import WingAnPrayer from './components/WingAnPrayer';
import CreateWingAnPrayer from './components/CreateWingAnPrayer';
import DisplayWingAnPrayer from './components/DisplayWingAnPrayer';
import EditWingAnPrayer from './components/EditWingAnPrayer';
import SouthTower from './components/SouthTower';
import EditSouthTower from './components/EditSouthTower';
import CreateSouthTower from './components/CreateSouthTower';
import DisplaySouthTower from './components/DisplaySouthTower';
import NorthTower from './components/NorthTower';
import EditNorthTower from './components/EditNorthTower';
import DisplayNorthTower from './components/DisplayNorthTower';
import CreateNorthTower from './components/CreateNorthTower';
import SvaHangar from './components/SvaHangar';
import EditSvaHangar from './components/EditSvaHangar';
import CreateSvaHangar from './components/CreateSvaHangar';
import DisplaySvaHangar from './components/DisplaySvaHangar';
import TenThroughEleven from './components/TenThroughEleven';
import EditTenElevenHangar from './components/EditTenElevenHangar';
import CreateTenElevenHangar from './components/CreateTenElevenHangar';
import DisplayTenElevenHangar from './components/DisplayTenElevenHangar';
import SkywayHolding from './components/SkywayHolding';
import EditSkywayHolding from './components/EditSkywayHolding';
import CreateSkywayHolding from './components/CreateSkywayHolding';
import DisplaySkywayHolding from './components/DisplaySkywayHolding';
import EditHillerAviation from './components/EditHillerAviation';
import CreateHillerAviation from './components/CreateHillerAviation';
import DisplayHillerAviation from './components/DisplayHillerAviation';
import NorthwestOverrun from './components/NorthwestOverrun';
import EditNorthwestOverrun from './components/EditNorthwestOverrun';
import CreateNorthwestOverrun from './components/CreateNorthwestOverrun';
import DisplayNorthwestOverrun from './components/DisplayNorthwestOverrun';
import TerminalLocations from './components/TerminalLocations';
import JatoAviation from './components/JatoAviation';
import EditJatoAviation from './components/EditJatoAviation';
import CreateJatoAviation from './components/CreateJatoAviation';
import DisplayJatoAviation from './components/DisplayJatoAviation';
import BayRamp from './components/BayRamp';
import EditBayRamp from './components/EditBayRamp';
import CreateBayRamp from './components/CreateBayRamp';
import DisplayBayRamp from './components/DisplayBayRamp';
import TshadeRamp from './components/TshadeRamp';
import EditTshadeRamp from './components/EditTshadeRamp';
import CreateTshadeRamp from './components/CreateTshadeRamp';
import DisplayTshadeRamp from './components/DisplayTshadeRamp';
import OneTwoHangars from './components/OneTwoHangars';
import EditOneTwoHangars from './components/EditOneTwoHangars';
import CreateOneTwoHangars from './components/CreateOneTwoHangars';
import DisplayOneTwoHangars from './components/DisplayOneTwoHangars';
import ThreeSevenHangars from './components/ThreeSevenHangars';
import EditThreeSevenHangars from './components/EditThreeSevenHangars';
import CreateThreeSevenHangars from './components/CreateThreeSevenHangars';
import DisplayThreeSevenHangars from './components/DisplayThreeSevenHangars';
import EightNineHangars from './components/EightNineHangars';
import EditEightNineHangars from './components/EditEightNineHangars';
import CreateEightNineHangars from './components/CreateEightNineHangars';
import DisplayEightNineHangars from './components/DisplayEightNineHangars';
import ExecutiveRamp from './components/ExecutiveRamp';
import CreateExecutiveRamp from './components/CreateExecutiveRamp';
// import Login from "./components/Login"

import LoginRegister from "./views/LoginRegister"
import { useState } from 'react';
import OwnersInfo from './components/OwnersInfo';
import Root from './components/route'
import AddWaapOwner from './components/AddWaapOwner';







function App() {

// const[isLoggedIn, setIsloggedIn] = useState(false)


  return (
<BrowserRouter>
    <div className="App">
    <Routes>
      
      <Route path="/" element={<LoginRegister/>}/>
      <Route path="/accountList" element={<Main/>}/>
      <Route path="/accountList/towerLocations" element={<TowerLocations/>}/>
      <Route path="/ownersInfo" element={<OwnersInfo/>}/>

      <Route path="/accountList/towerLocations/airRoger" element={<AirRoger/>}/>
      <Route path="/accountList/towerLocations/thirteenThroughFifteenHangars" element={<ThirteenThroughFifteenHangars/>}/>
      <Route path="/accountList/towerLocations/wingAnPrayer" element={<WingAnPrayer/>}/>
      <Route path="/accountList/towerLocations/southTower" element={<SouthTower/>}/>
      <Route path="/accountList/towerLocations/northTower" element={<NorthTower/>}/>
      <Route path="/accountList/towerLocations/svaHangar" element={<SvaHangar/>}/>
      <Route path="/accountList/towerLocations/tenEleven" element={<TenThroughEleven/>}/>
      <Route path="/accountList/towerLocations/skywayHolding" element={<SkywayHolding/>}/>
      <Route path="/accountList/towerLocations/hillerAviation" element={<HillerAviation/>}/>
      <Route path="/accountList/towerLocations/northwestOverrun" element={<NorthwestOverrun/>}/>

      <Route path="/airRogerPlane/edit/:id" element={<EditAirRoger/>}/>
      <Route path="/tFplane/edit/:id" element={<EditTtFhangar/>}/>
      <Route path="/wingPrayer/edit/:id" element={<EditWingAnPrayer/>}/>
      <Route path="/southTower/edit/:id" element={<EditSouthTower/>}/>
      <Route path="/northTower/edit/:id" element={<EditNorthTower/>}/>
      <Route path="/svaHangar/edit/:id" element={<EditSvaHangar/>}/>
      <Route path="/tenElevenHangar/edit/:id" element={<EditTenElevenHangar/>}/>
      <Route path="/skywayHolding/edit/:id" element={<EditSkywayHolding/>}/>
      <Route path="/hillerAviation/edit/:id" element={<EditHillerAviation/>}/>
      <Route path="/northwestOverrun/edit/:id" element={<EditNorthwestOverrun/>}/>

      <Route path="/airRogerCreate" element={<CreateAirRoger/>}/>
      <Route path="/tTfHangarCreate" element={<CreateTfHangar/>}/>
      <Route path="/wingPrayerCreate" element={<CreateWingAnPrayer/>}/>
      <Route path="/southTowerCreate" element={<CreateSouthTower/>}/>
      <Route path="/northTowerCreate" element={<CreateNorthTower/>}/>
      <Route path="/svaHangarCreate" element={<CreateSvaHangar/>}/>
      <Route path="/tenElevenCreate" element={<CreateTenElevenHangar/>}/>
      <Route path="/skywayHoldingCreate" element={<CreateSkywayHolding/>}/>
      <Route path="/hillerAviationCreate" element={<CreateHillerAviation/>}/>
      <Route path="/northwestOverrunCreate" element={<CreateNorthwestOverrun/>}/>
      <Route path="/waapOwnerCreate" element={<AddWaapOwner/>}/>

      <Route path="/airRogerPlane/:id" element={<DisplayAirRoger/>}/>
      <Route path="/tFplane/:id" element={<DisplayTfHangar/>}/>
      <Route path="/wingPrayer/:id" element={<DisplayWingAnPrayer/>}/>
      <Route path="/southTower/:id" element={<DisplaySouthTower/>}/>
      <Route path="/northTower/:id" element={<DisplayNorthTower/>}/>
      <Route path="/svaHangar/:id" element={<DisplaySvaHangar/>}/>
      <Route path="/tenElevenHangar/:id" element={<DisplayTenElevenHangar/>}/>
      <Route path="/skywayHolding/:id" element={<DisplaySkywayHolding/>}/>
      <Route path="/hillerAviation/:id" element={<DisplayHillerAviation/>}/>
      <Route path="/northwestOverrun/:id" element={<DisplayNorthwestOverrun/>}/>
     
      {/* terminal location */}
      <Route path="/accountList/terminalLocations" element={<TerminalLocations/>}/>

      <Route path="/accountList/terminalLocations/jatoAviation" element={<JatoAviation/>}/>
      <Route path="/accountList/terminalLocations/bayRamp" element={<BayRamp/>}/>
      <Route path="/accountList/terminalLocations/tShadeRamp" element={<TshadeRamp/>}/>
      <Route path="/accountList/terminalLocations/oneTwoHangars" element={<OneTwoHangars/>}/>
      <Route path="/accountList/terminalLocations/threeSevenHangars" element={<ThreeSevenHangars/>}/>
      <Route path="/accountList/terminalLocations/eightNineHangars" element={<EightNineHangars/>}/>
      <Route path="/accountList/terminalLocations/executiveRamp" element={<ExecutiveRamp/>}/>
      <Route path="/accountList/terminalLocations/northTower" element={<NorthTower/>}/>

      <Route path="/jatoAviation/edit/:id" element={<EditJatoAviation/>}/>
      <Route path="/bayRamp/edit/:id" element={<EditBayRamp/>}/>
      <Route path="/tShadeRamp/edit/:id" element={<EditTshadeRamp/>}/>
      <Route path="/oneTwoHangars/edit/:id" element={<EditOneTwoHangars/>}/>
      <Route path="/threeSevenHangars/edit/:id" element={<EditThreeSevenHangars/>}/>
      <Route path="/eightNineHangars/edit/:id" element={<EditEightNineHangars/>}/>

      <Route path="/jatoAviationCreate" element={<CreateJatoAviation/>}/>
      <Route path="/bayRampCreate" element={<CreateBayRamp/>}/>
      <Route path="/tShadeRampCreate" element={<CreateTshadeRamp/>}/>
      <Route path="/oneTwoHangarsCreate" element={<CreateOneTwoHangars/>}/>
      <Route path="/threeSevenHangarsCreate" element={<CreateThreeSevenHangars/>}/>
      <Route path="/eightNineHangarsCreate" element={<CreateEightNineHangars/>}/>
      <Route path="/executiveRampCreate" element={<CreateExecutiveRamp/>}/>

      <Route path="/jatoAviation/:id" element={<DisplayJatoAviation/>}/>
      <Route path="/bayRamp/:id" element={<DisplayBayRamp/>}/>
      <Route path="/tShadeRamp/:id" element={<DisplayTshadeRamp/>}/>
      <Route path="/oneTwoHangars/:id" element={<DisplayOneTwoHangars/>}/>
      <Route path="/threeSevenHangars/:id" element={<DisplayThreeSevenHangars/>}/>
      <Route path="/eightNineHangars/:id" element={<DisplayEightNineHangars/>}/>
    </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;

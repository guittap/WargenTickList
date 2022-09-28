import './css/font.css';
import 'bulma/css/bulma.css';
import Home from "./js/Home";
import Area from "./js/Area";

import Standouts from './assets/standouts.txt'
import Kraft from "./assets/kraft.txt";
import RedSprings from "./assets/redsprings.txt";
import PriestDraw from "./assets/priestdraw.txt";
import MoesValley from "./assets/moesvalley.txt";
import WillowSprings from "./assets/willowsprings.txt";
import Buttermilks from "./assets/buttermilks.txt";
import SuperMarioLand from "./assets/supermarioland.txt";
import BlackVelvet from "./assets/blackvelvet.txt";
import CalicoBasin from "./assets/calicobasin.txt";
import Gateway from "./assets/gateway.txt";
import MtCharleston from "./assets/mtcharleston.txt";
import HappyBoulders from "./assets/happyboulders.txt";
import SadBoulders from "./assets/sadboulders.txt";
import WestCluster from "./assets/westcluster.txt";


import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Standouts" element={<Area area={Standouts} areaName="Standouts"/>}/>
        <Route path="/Kraft" element={<Area area={Kraft} areaName="Kraft"/>}/>
        <Route path="/RedSprings" element={<Area area={RedSprings} areaName="Red Springs"/>}/>
        <Route path="/PriestDraw" element={<Area area={PriestDraw} areaName="Priest Draw"/>}/>
        <Route path="/MoesValley" element={<Area area={MoesValley} areaName="Moes Valley"/>}/>
        <Route path="/WillowSprings" element={<Area area={WillowSprings} areaName="Willow Springs"/>}/>
        <Route path="/Buttermilks" element={<Area area={Buttermilks} areaName="Buttermilks"/>}/>
        <Route path="/SuperMarioLand" element={<Area area={SuperMarioLand} areaName="Super Mario Land"/>}/>
        <Route path="/BlackVelvet" element={<Area area={BlackVelvet} areaName="Black Velvet"/>}/>
        <Route path="/CalicoBasin" element={<Area area={CalicoBasin} areaName="Calico Basin"/>}/>
        <Route path="/Gateway" element={<Area area={Gateway} areaName="Gateway"/>}/>
        <Route path="/MtCharleston" element={<Area area={MtCharleston} areaName="Mt Charleston"/>}/>
        <Route path="/HappyBoulders" element={<Area area={HappyBoulders} areaName="Happy Boulders"/>}/>
        <Route path="/SadBoulders" element={<Area area={SadBoulders} areaName="Sad Boulders"/>}/>
        <Route path="/WestCluster" element={<Area area={WestCluster} areaName="West Cluster"/>}/>


      </Routes>
    </BrowserRouter>
  );
}

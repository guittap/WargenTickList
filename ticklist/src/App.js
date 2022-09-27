import 'bulma/css/bulma.min.css';
import Home from "./Home";
import Area from "./Area";

import Standouts from './areas/standouts.txt'
import Kraft from "./areas/kraft.txt";
import RedSprings from "./areas/redsprings.txt";
import PriestDraw from "./areas/priestdraw.txt";
import MoesValley from "./areas/moesvalley.txt";


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
      </Routes>
    </BrowserRouter>
  );
}

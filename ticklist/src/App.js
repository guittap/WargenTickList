import 'bulma/css/bulma.min.css';
import Home from "./Home";
import Kraft from "./areas/Kraft";
import RedSprings from "./areas/RedSprings";
import PriestDraw from "./areas/PriestDraw";
import { Route, Routes, HashRouter } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Kraft" element={<Kraft/>}/>
        <Route path="/RedSprings" element={<RedSprings/>}/>
        <Route path="/PriestDraw" element={<PriestDraw/>}/>
      </Routes>
    </HashRouter>
  );
}

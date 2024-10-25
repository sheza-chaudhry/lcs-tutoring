import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesBoxes from "./components/services";

import BrandonButton from "@/components/buttonBrandon";
import SethRachelButton from "./components/buttonSethRachel";
import ValentinaCharlieButton from "./components/buttonValentinaCharlie";
import AnneRainierButton from "@/components/buttonAnneRainier";
import ArayHunterButton from "./components/buttonArayHunter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div></div>}></Route>

        <Route
          path="/testbuttons"
          element={
            <div>
              <BrandonButton />
              {/* <SethRachelButton /> */}
              {/* <ValentinaCharlieButton /> */}
              {/* <AnneRainierButton /> */}
              {/* <ArayHunterButton /> */}
            </div>
          }
        ></Route>

        {/* New route to display the next component! */}
        <Route
          path="/services" // TODO: Change the path name to match that of your component
          element={
            <div>
              {
                /* TODO: Include your component here: */ <ServicesBoxes></ServicesBoxes>
              }
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

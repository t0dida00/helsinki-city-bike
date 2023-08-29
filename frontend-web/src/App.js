
import { NotFound } from './screens/404page';
import {Home} from './screens/Home';
import { Route, Routes } from "react-router-dom"
import { Journeys } from './screens/Journeys';
import Station from './screens/Station';

function App() {
  return (
    <Routes >
     
      <Route path="/stations" element={<Home />}  />
       <Route path="/trips" element={<Journeys />} />
       <Route path="/station/:name" element={<Station />} />

      {/*<Route path="/station/:name" element={<Station />} />
      <Route path="/stations/import" element={<Import type={"stations"} />} />
      <Route path="/trips/import" element={<Import  type={"trips"}/>} /> */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clusters from "./pages/clusters";
import Network from "./pages/network";
import Storage from "./pages/storage";

export default function Root(props) {
  return <BrowserRouter>
  <Routes>
    <Route path="/infra/clusters" element={<Clusters/>}/>
    <Route path="/infra/storage" element={<Storage/>}/>
    <Route path="/infra/network" element={<Network/>}/>
  </Routes>
  </BrowserRouter>
}

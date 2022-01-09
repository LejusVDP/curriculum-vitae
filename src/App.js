import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Exo1 from "./pages/Exo1";
import Exo2 from "./pages/Exo2";
import Exo3 from "./pages/Exo3";
import Exo4 from "./pages/Exo4";
import Exo5 from "./pages/Exo5";
import Exo6 from "./pages/Exo6";
import Exo7 from "./pages/Exo7";
import NotFound from "./pages/NotFound";
import "./styles/App.css"

const links = [
  {to: '/', element: <Home />},
  {to: '/exo1', element: <Exo1 />},
  {to: '/exo2', element: <Exo2 />},
  {to: '/exo3', element: <Exo3 />},
  {to: '/exo4', element: <Exo4 />},
  {to: '/exo5', element: <Exo5 />},
  {to: '/exo6', element: <Exo6 />},
  {to: '/exo7', element: <Exo7 />},
  {to: '*', element: <NotFound />},
]

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
        {links.map(link => (
          <Route path={link.to} exact element={link.element} key={link.to}/>
        ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

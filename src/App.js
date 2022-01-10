import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Exo from "./pages/Exo";
import NotFound from "./pages/NotFound";
import "./styles/App.css"

function App() {

  const exercises = [
    {
      id: "1", name: "Exercice 1", img: "./home.png"
    },
    {
      id: "2", name:"Exercice 2", img: "./home.png"
    },
    {
      id: "3", name:"Exercice 3", img: "./home.png"
    },
    {
      id: "4", name:"Exercice 4", img:"./home.png"
    },
    {
      id: "5", name:"Exercice 5", img:"./home.png"
    },
    {
      id: "6", name:"Exercice 6", img:"vhome.png"
    }
  ]

  /*const links = [
    {to: '/', element: <Home />},
    {to: '/exo1', element: <Exo id={exercises} />},
    {to: '/exo2', element: <Exo />},
    {to: '/exo3', element: <Exo />},
    {to: '/exo4', element: <Exo />},
    {to: '/exo5', element: <Exo />},
    {to: '/exo6', element: <Exo />},
    {to: '/exo7', element: <Exo />},
    {to: '*', element: <NotFound />},
  ]

  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    axios.get('http://localhost:3003/exercises').then((res) => setExercisesData(res.data));
  }*/
  
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        {exercises.map(ex => (
          <Route path={'/exo'+ex.id} element={<Exo props={ex} />} key={ex.id} />
        ))}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

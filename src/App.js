import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Exo from "./pages/Exo";
import "./styles/App.css"
import Navigation from "./components/Navigation";

function App() {

  const exercises = [
    {
      id: "1", name: "Exercice 1"
    },
    {
      id: "2", name: "Exercice 2"
    },
    {
      id: "3", name: "Exercice 3"
    },
    {
      id: "4", name: "Exercice 4"
    },
    {
      id: "5", name: "Exercice 5"
    },
    {
      id: "6", name: "Exercice 6"
    },
    {
      id: "6", name:"Exercice 6"
    },
    {
      id: "Error404", name: "NOT FOUND"
    }
  ]
  const imagesFormat = [{
      main : "png",
      secondary : "png"
  }];

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
  }
  exercises.forEach(element => { console.log(element.id);})*/
  
  const images =
    exercises.map ( ex =>  (
      {
        id: ex.id,
        main: "./img/exo"+ex.id+"/main."+imagesFormat[0].main,
        others: [
          "./img/exo"+ex.id+"/other-1."+imagesFormat[0].secondary,
          "./img/exo"+ex.id+"/other-2."+imagesFormat[0].secondary
      ]
      }
    ))

  return (
    <div id="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />
        {exercises.map(ex => (
          <Route path={'/exo'+ex.id} element={<Exo exercise={ex} images={images[ex.id-1]} />} key={ex.id} />
        ))}
        <Route path="*" element={<Exo exercise={{id: "Error404", name: "NOT FOUND", img: "./img/notFound.jpg"}} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
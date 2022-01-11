import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Exo from "./pages/Exo";
import NotFound from "./pages/NotFound";
import "./styles/App.css"
import Navigation from "./components/Navigation";

function App() {

  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get(
      "https://raw.githubusercontent.com/LejusVDP/sport/main/src/assets/db.json"
      )
      .then((res) => {
        setData(res.data);
      });
  }, [])

  const imagesFormat = [{
      main : "png",
      secondary : "png"
  }];
/*
  const getData = () => {
    axios.get('http://localhost:3003/exercises').then((res) => setExercisesData(res.data));
  }
  exercises.forEach(element => { console.log(element.id);})*/
  
  const images =
    data.map ( ex =>  (
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
        {data.map(ex => (
          <Route path={'/exo'+ex.id} element={<Exo exercise={ex} images={images[ex.id-1]} />} key={ex.id} />
        ))}
        <Route path="*" element={<NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
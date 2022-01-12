import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/App.css"
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Moi from "./pages/Moi";
import Competences from "./pages/Competences";
import Etudes from "./pages/Etudes";
import Contact from "./pages/Contact";

function App() {

  const pages = [
    {
      url: "a-propos",
      element: <Moi />
    },
    {
      url: "competences",
      element: <Competences />
    },
    {
      url: "etudes",
      element: <Etudes />
    },
    {
      url: "contact",
      element: <Contact />
    }
  ]

  return (
    <div id="App">
      <div className="bg-image"></div>
      <div className="content">
      <BrowserRouter>
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />
        {pages.map(page => (
          <Route path={'/'+page.url} element={page.element} key={page.url} />
        ))}
        <Route path="*" element={<NotFound /> } />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
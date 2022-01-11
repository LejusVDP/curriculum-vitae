import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Exo from "./pages/Exo";
import "./styles/App.css"
import Navigation from "./components/Navigation";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
		axios
			.get(
			"./assets/db.json"
			)
			.then((res) => {
				setData(res.data);
			});
	}, []);
    /*{
      id: "1", name: "Exercice N°1", description: {
        goalsIntro: "Notre premier exercice a pour but de :",
        goals: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, repellendus?", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
        stepsIntro: "Il se déroule en 3 étapes :",
        steps: [
          {
            id: "1",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, delectus aut molestiae vitae reiciendis nam? Minima impedit, sapiente aliquid qui molestias consectetur amet voluptatum et recusandae deleniti rerum in debitis perspiciatis voluptatem nobis distinctio obcaecati ut adipisci dignissimos voluptas quia voluptate molestiae ex! Iusto hic et, enim beatae, totam, blanditiis fugit at ipsam quam officia doloremque!"
          },
          {
            id: "2",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos tenetur ipsum iure eos vero voluptatem magnam veritatis, in nostrum aliquid esse, asperiores molestiae!"
          },
          {
            id: "3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio qui esse reprehenderit labore, nisi inventore fugiat officia, voluptates mollitia veniam id quibusdam culpa natus? Explicabo maiores quasi magnam, sint vel impedit reiciendis! Unde commodi, possimus sequi esse aliquid numquam quam molestias voluptates, magnam eius corrupti ad facilis totam."
          }
        ]
      }
    },
    {
      id: "2", name: "Exercice N°2", description: {
        goalsIntro: "Notre premier exercice a pour but de :",
        goals: ["Merol muspi rolod tis tema rutetcesnoc gnicisipida tile. Minima, repellendus?", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
        stepsIntro: "Il se déroule en 3 étapes :",
        steps: [
          {
            id: "1",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos tenetur ipsum iure eos vero voluptatem magnam veritatis, in nostrum aliquid esse, asperiores molestiae!"
          },
          {
            id: "2",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, delectus aut molestiae vitae reiciendis nam? Minima impedit, sapiente aliquid qui molestias consectetur amet voluptatum et recusandae deleniti rerum in debitis perspiciatis voluptatem nobis distinctio obcaecati ut adipisci dignissimos voluptas quia voluptate molestiae ex! Iusto hic et, enim beatae, totam, blanditiis fugit at ipsam quam officia doloremque!"
          },
          {
            id: "3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio qui esse reprehenderit labore, nisi inventore fugiat officia, voluptates mollitia veniam id quibusdam culpa natus? Explicabo maiores quasi magnam, sint vel impedit reiciendis! Unde commodi, possimus sequi esse aliquid numquam quam molestias voluptates, magnam eius corrupti ad facilis totam."
          }
        ]
      }
    },
    {
      id: "3", name: "Exercice N°3", description: {
        goalsIntro: "Notre premier exercice a pour but de :",
        goals: ["Merol muspi rolod tis tema rutetcesnoc gnicisipida tile. Minima, repellendus?", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
        stepsIntro: "Il se déroule en 3 étapes :",
        steps: [
          {
            id: "1",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos tenetur ipsum iure eos vero voluptatem magnam veritatis, in nostrum aliquid esse, asperiores molestiae!"
          },
          {
            id: "2",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, delectus aut molestiae vitae reiciendis nam? Minima impedit, sapiente aliquid qui molestias consectetur amet voluptatum et recusandae deleniti rerum in debitis perspiciatis voluptatem nobis distinctio obcaecati ut adipisci dignissimos voluptas quia voluptate molestiae ex! Iusto hic et, enim beatae, totam, blanditiis fugit at ipsam quam officia doloremque!"
          },
          {
            id: "3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio qui esse reprehenderit labore, nisi inventore fugiat officia, voluptates mollitia veniam id quibusdam culpa natus? Explicabo maiores quasi magnam, sint vel impedit reiciendis! Unde commodi, possimus sequi esse aliquid numquam quam molestias voluptates, magnam eius corrupti ad facilis totam."
          }
        ]
      }
    },
    {
      id: "4", name: "Exercice N°4", description: {
        goalsIntro: "Notre premier exercice a pour but de :",
        goals: ["Merol muspi rolod tis tema rutetcesnoc gnicisipida tile. Minima, repellendus?", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
        stepsIntro: "Il se déroule en 3 étapes :",
        steps: [
          {
            id: "1",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos tenetur ipsum iure eos vero voluptatem magnam veritatis, in nostrum aliquid esse, asperiores molestiae!"
          },
          {
            id: "2",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, delectus aut molestiae vitae reiciendis nam? Minima impedit, sapiente aliquid qui molestias consectetur amet voluptatum et recusandae deleniti rerum in debitis perspiciatis voluptatem nobis distinctio obcaecati ut adipisci dignissimos voluptas quia voluptate molestiae ex! Iusto hic et, enim beatae, totam, blanditiis fugit at ipsam quam officia doloremque!"
          },
          {
            id: "3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio qui esse reprehenderit labore, nisi inventore fugiat officia, voluptates mollitia veniam id quibusdam culpa natus? Explicabo maiores quasi magnam, sint vel impedit reiciendis! Unde commodi, possimus sequi esse aliquid numquam quam molestias voluptates, magnam eius corrupti ad facilis totam."
          }
        ]
      }
    },
    {
      id: "5", name: "Exercice N°5", description: {
        goalsIntro: "Notre premier exercice a pour but de :",
        goals: ["Merol muspi rolod tis tema rutetcesnoc gnicisipida tile. Minima, repellendus?", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
        stepsIntro: "Il se déroule en 3 étapes :",
        steps: [
          {
            id: "1",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos tenetur ipsum iure eos vero voluptatem magnam veritatis, in nostrum aliquid esse, asperiores molestiae!"
          },
          {
            id: "2",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, delectus aut molestiae vitae reiciendis nam? Minima impedit, sapiente aliquid qui molestias consectetur amet voluptatum et recusandae deleniti rerum in debitis perspiciatis voluptatem nobis distinctio obcaecati ut adipisci dignissimos voluptas quia voluptate molestiae ex! Iusto hic et, enim beatae, totam, blanditiis fugit at ipsam quam officia doloremque!"
          },
          {
            id: "3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio qui esse reprehenderit labore, nisi inventore fugiat officia, voluptates mollitia veniam id quibusdam culpa natus? Explicabo maiores quasi magnam, sint vel impedit reiciendis! Unde commodi, possimus sequi esse aliquid numquam quam molestias voluptates, magnam eius corrupti ad facilis totam."
          }
        ]
      }
    },
    {
      id: "6", name: "Exercice N°6", description: {
        goalsIntro: "Notre premier exercice a pour but de :",
        goals: ["Merol muspi rolod tis tema rutetcesnoc gnicisipida tile. Minima, repellendus?", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
        stepsIntro: "Il se déroule en 3 étapes :",
        steps: [
          {
            id: "1",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos tenetur ipsum iure eos vero voluptatem magnam veritatis, in nostrum aliquid esse, asperiores molestiae!"
          },
          {
            id: "2",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, delectus aut molestiae vitae reiciendis nam? Minima impedit, sapiente aliquid qui molestias consectetur amet voluptatum et recusandae deleniti rerum in debitis perspiciatis voluptatem nobis distinctio obcaecati ut adipisci dignissimos voluptas quia voluptate molestiae ex! Iusto hic et, enim beatae, totam, blanditiis fugit at ipsam quam officia doloremque!"
          },
          {
            id: "3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio qui esse reprehenderit labore, nisi inventore fugiat officia, voluptates mollitia veniam id quibusdam culpa natus? Explicabo maiores quasi magnam, sint vel impedit reiciendis! Unde commodi, possimus sequi esse aliquid numquam quam molestias voluptates, magnam eius corrupti ad facilis totam."
          }
        ]
      }
    },
    {
      id: "7", name:"Exercice N°7", description: {
        goalsIntro: "Notre premier exercice a pour but de :",
        goals: ["Merol muspi rolod tis tema rutetcesnoc gnicisipida tile. Minima, repellendus?", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
        stepsIntro: "Il se déroule en 3 étapes :",
        steps: [
          {
            id: "1",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos tenetur ipsum iure eos vero voluptatem magnam veritatis, in nostrum aliquid esse, asperiores molestiae!"
          },
          {
            id: "2",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, delectus aut molestiae vitae reiciendis nam? Minima impedit, sapiente aliquid qui molestias consectetur amet voluptatum et recusandae deleniti rerum in debitis perspiciatis voluptatem nobis distinctio obcaecati ut adipisci dignissimos voluptas quia voluptate molestiae ex! Iusto hic et, enim beatae, totam, blanditiis fugit at ipsam quam officia doloremque!"
          },
          {
            id: "3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio qui esse reprehenderit labore, nisi inventore fugiat officia, voluptates mollitia veniam id quibusdam culpa natus? Explicabo maiores quasi magnam, sint vel impedit reiciendis! Unde commodi, possimus sequi esse aliquid numquam quam molestias voluptates, magnam eius corrupti ad facilis totam."
          }
        ]
      }
    }
  ]*/
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
        <Route path="*" element={<Exo exercise={{id: "Error404", name: "NOT FOUND", img: "./img/notFound.jpg"}} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
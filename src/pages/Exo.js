import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';

const Exo = (props) => {

    const exercise = props
    useEffect(() => {
        console.log(exercise);
      }, [])
    return (
        <div>
            <Navigation />
            <h1>EXERCICE {exercise.id}</h1>
            <img src={exercise.img} alt="HOME" />
        </div>
    );
};

export default Exo;
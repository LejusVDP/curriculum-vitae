import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';

const Exo = (props) => {

    const  { exercise } = props;
    const  { images } = props;

    return (
        <div className='exo-page' id='exo-page'>
            {exercise.id === 'Error404' ? (
                <div className="error404">
                    <h1>{exercise.id} : {exercise.name}</h1>
                    <img src={exercise.img} alt="NOT FOUND IMAGE NOT FOUND" />
                </div>
            ) : (
            <div className="exercise-found">
            <h1>EXERCICE {exercise.id}</h1>
            <img src={images.main} alt="Main image" />
            {images.others.map(img => (
                <img src={img} alt='Other images' key={img} />
            ))}
            </div>
            )}
        </div>
    );
};

export default Exo;
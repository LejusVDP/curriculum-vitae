import React from 'react';

const Exo = (props) => {

    const  { exercise } = props;
    const  { images } = props;
    const descript = exercise.description;

    return (
        <div className='exo-page' id='exo-page'>
            {exercise.id === 'Error404' ? (
                <div className="error404">
                    <h1>{exercise.id} : {exercise.name}</h1>
                    <img src={exercise.img} alt="" />
                </div>
            ) : (
            <div className="exercise-found">
                <h1>EXERCICE {exercise.id}</h1>
                <div className="exercise-main">
                    <div className="all-img">
                        <img src={images.main} alt="Main" className='main-img' />
                        {images.others.map(img => (
                            <img src={img} alt='Other' key={img}  className="other-img" />
                        ))}
                    </div>
                    <h3>{exercise.name}</h3>
                    <div className="exercise-descript">
                        <p>{descript.goalsIntro}</p>
                        <ul>
                            {descript.goals.map(goal => (
                                <li key={goal}>{goal}</li>
                            ))}
                        </ul>
                        <p>{descript.stepsIntro}</p>
                        <ol>
                            {descript.steps.map(step => (
                                <li key={step.id}>{step.text}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default Exo;
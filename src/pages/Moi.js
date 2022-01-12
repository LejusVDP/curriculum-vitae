import React from 'react';

const Moi = () => {

    return (
        <div className='page-moi' id='page-moi'>
                <h1>A PROPOS DE MOI</h1>
                <div className="moi-img">
                    <img src='./img/identite.jpg' alt="Identité" />
                </div>
                <div className="moi-main">
                    <p>Je m'appelle Jules Vandeputte et je suis actuellement étudiant en Informatique au sein d'un DUT en Année Spéciale, soit en un an au lieu de deux.</p>
                    <p>Je suis à la recherche d'un stage couvrant la période du 13 Juin au 19 Août 2022 me permettant à la fois de développer mes connaissances et mes habitudes de travail, et d'apporter mes compétences pour participer à la réalisation de certaines missions d'entreprise.</p>
                </div>
        </div>
    );
};

export default Moi;
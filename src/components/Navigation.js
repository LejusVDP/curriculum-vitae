import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Select from 'react-select';

const links = [
    {value: '/a-propos', label: 'A Propos'},
    {value: '/etudes', label: 'Études'},
    {value: '/competences', label:'Compétences'},
    {value: '/exo4', label: 'Exo4'},
    {value: '/exo5', label: 'Exo5'},
    {value: '/exo6', label: 'Exo6'},
    {value: '/exo7', label: 'Exo7'},
]



const Navigation = (props) => {

    /*useEffect(() => {
        console.log(links);
    }, []);*/

    const nav = useRef(null);
    const navigate = useNavigate();
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const isSearchable = true;

    async function exerciseNavigate(link) {
        navigate(link);
    }

    return (
        <nav id='Navigation' ref={nav}>
        <div className="nav-home">
                <NavLink to="/" >
                    <img src="./home.png" alt="Home" />
                </NavLink>
            </div>
            <div className="left-links">
                <NavLink to="/cv-file" >CV Classique</NavLink>
            </div>
            <Select
          className="exercise-select"
          defaultValue={links[1].label}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={isSearchable}
          name="exercise"
          options={links}
          onChange={(e) => exerciseNavigate(e.value)}
        />
            <ul className='right-links'>
                <NavLink to="/contact" >Contact</NavLink>
                <NavLink to="/jspquoi" >Jspquoi</NavLink>
            </ul>
            <label className="theme-switch">
            <input className="theme-input" type="checkbox" defaultChecked={isDarkTheme} onClick={() => {
                setIsDarkTheme(!isDarkTheme);
                document.body.classList.toggle("light-theme-body");
                nav.current.style.backgroundColor = isDarkTheme ? "white" : "#24262b";
            }} />
            <span className="slider round"></span>
            </label>
        </nav>
    );
    
};

export default Navigation;
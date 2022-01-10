import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Select from 'react-select';

const links = [
    {value: '/exo1', label: 'Exo1'},
    {value: '/exo2', label: 'Exo2'},
    {value: '/exo3', label: 'Exo3'},
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
                    <img class="fit-picture" src="./home.png" alt="Home" />
                </NavLink>
            </div>
            <Select
          className="exercise-picker"
          defaultValue={links.label}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={isSearchable}
          name="exercise"
          options={links}
          onChange={(e) => exerciseNavigate(e.value)}
        />
            <ul>
                {links.map(link => (
                    <NavLink
                        to={link.value} key={link.label}
                    >
                    {link.label}
                    </NavLink>
                ))}
            </ul>
            <label class="theme-switch">
            <input type="checkbox" defaultChecked={isDarkTheme} onClick={() => {
                setIsDarkTheme(!isDarkTheme);
                document.getElementById("App").style.cssText = isDarkTheme ? "background-color : #dddddd; color: #6d9b00;" : "background-color : #343741; color: #b6f12c;";
                nav.current.style.backgroundColor = isDarkTheme ? "white" : "#24262b";
            }} />
            <span class="slider round"></span>
            </label>
        </nav>
    );
    
};

export default Navigation;
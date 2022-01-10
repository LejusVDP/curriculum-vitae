import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Select } from 'react-select';

const links = [
    {to: '/exo1', name: 'Exo1'},
    {to: '/exo2', name: 'Exo2'},
    {to: '/exo3', name: 'Exo3'},
    {to: '/exo4', name: 'Exo4'},
    {to: '/exo5', name: 'Exo5'},
    {to: '/exo6', name: 'Exo6'},
    {to: '/exo7', name: 'Exo7'},
]

const Navigation = (props) => {

    const nav = useRef(null);
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const isSearchable = true;

    return (
        <nav id='Navigation' ref={nav}>
            <div className="nav-home">
                <NavLink to="/" >
                    <img class="fit-picture" src="./home.png" alt="Home" />
                </NavLink>
            </div>
            <Select
          className="exercise-picker"
          defaultValue={links.name[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={isSearchable}
          name="exercise"
          options={links.name}
        />
            <ul>
                {links.map(link => (
                    <NavLink
                        to={link.to} key={link.name}
                    >
                    {link.name}
                    </NavLink>
                ))}
            </ul>
            <label class="theme-switch">
            <input type="checkbox" defaultChecked={isDarkTheme} onClick={() => {
                setIsDarkTheme(!isDarkTheme);
                console.log("ok");
                document.getElementById("App").style.backgroundColor = isDarkTheme ? "#dddddd" : "#343741";
                nav.current.style.backgroundColor = isDarkTheme ? "white" : "#24262b";
            }} />
            <span class="slider round"></span>
            </label>
        </nav>
    );
};

export default Navigation;
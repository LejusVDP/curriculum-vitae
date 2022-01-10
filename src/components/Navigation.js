import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

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
    const [theme, setTheme] = useState(true);

    return (
        <nav id='Navigation' ref={nav}>
            <div className="nav-home">
                <NavLink to="/" >
                    <img class="fit-picture" src="./home.png" alt="Home" />
                </NavLink>
            </div>
            <select name="Exercice" id="exercise-picker" /*onChange={(e) => {
                const selectedOption = e.target.value;
                window.location = "http://localhost:3000/" + selectedOption;
            }}*/>
                <NavLink to="/">OUI BONSOIR</NavLink>
                {links.map(link => (
                    <option value={<NavLink to={link.to}></NavLink>} key={link.name}>{link.name}</option>
                ))}
            </select>
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
            <input type="checkbox" defaultChecked={theme} onClick={() => {
                setTheme(!theme);
                console.log("ok");
                document.getElementById("App").style.backgroundColor = theme ? "#dddddd" : "#343741";
                nav.current.style.backgroundColor = theme ? "white" : "#24262b";
            }} />
            <span class="slider round"></span>
            </label>
        </nav>
    );
};

export default Navigation;
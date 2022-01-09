import React, { useState } from 'react';
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

const Navigation = () => {

    const [theme, setTheme] = useState(true);

    return (
        <nav id='Navigation'>
            <div className="nav-home">
                <NavLink to="/" >
                    <img class="fit-picture" src="./home.png" alt="Home" />
                </NavLink>
            </div>
            <select name="Exercice" id="exercise-picker">
                <option>-</option>
                {links.map(link => (
                    <option key={link.name}>{link.name}</option>
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
                const App = document.getElementById("App");
                const Nav = document.getElementById("Navigation");
                setTheme(!theme);
                console.log("ok");
                    theme ? (
                        App.style.backgroundColor = "#dddddd",
                        Nav.style.backgroundColor = "white",
                        console.log("JOUR")
                    ) : (
                        App.style.backgroundColor = "#343741",
                        Nav.style.backgroundColor = "#24262b",
                        console.log("NUIT")
                    );
            }} />
            <span class="slider round"></span>
            </label>
        </nav>
    );
};

export default Navigation;
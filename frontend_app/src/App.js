import {
    Route,
    Routes,
    NavLink,
    HashRouter,
} from "react-router-dom";
import React from 'react'
import './App.css';
import Monsters from "./Monsters";
import Home from "./Home";
import Rulebooks from "./Rulebooks";
import Classes from "./Classes";
import Spells from "./Spells";
import logo from './images/logo.png'

import home from './images/home.png'
import monsters from './images/monsters.png'
import rulebooks from './images/rulebooks.png'
import spells from './images/spells.png'
import classes from './images/classes.png'

function App() {

    return (
        <HashRouter>
            <div className='main'>
                <div className="header">
                    <div>
                        <img src={logo} className="logo"/>
                        <ul>
                            <li><NavLink to="/"><img src={home} alt='no'/></NavLink></li>
                            <li><NavLink to="/rulebooks"><img src={rulebooks} alt='no'/></NavLink></li>
                            <li><NavLink to="/monsters"><img src={monsters} alt='no'/></NavLink></li>
                            <li><NavLink to="/classes"><img src={classes} alt='no'/></NavLink></li>
                            <li><NavLink to="/spells"><img src={spells} alt='no'/></NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rulebooks" element={<Rulebooks />} />
                        <Route path="/monsters" element={<Monsters />} />
                        <Route path="/classes" element={<Classes />} />
                        <Route path="/spells" element={<Spells />} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;

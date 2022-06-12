import React from "react";
import {Link} from "react-router-dom";

//skal flyttes om til App.js igen, for at give bedre overblik
//og for at se om den så er på alle sider

export const NavBar = () =>{
    return(
        <div>
            <nav className="navBar">
                <ul>
                    <Link to ="/forside">Forside</Link>
                </ul>
                <ul>
                    <Link to="/timelinealluser">Se alle timelines</Link> <br/>
                </ul>
                <ul>
                    <Link to="/">Se specifik timeline</Link> <br/>
                </ul>
                <ul>
                    <Link to= "/createtimeline">Lav ny timeline</Link> <br/>
                </ul>
                <ul>
                    <Link to="/">Lav nyt spot til en timeline</Link> <br/>
                </ul>
                <ul>
                    <Link to="/">Se alle lokationer</Link>
                </ul>
            </nav>
        </div>
    )
}
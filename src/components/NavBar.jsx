import React from "react";
import {Link} from "react-router-dom";

//skal flyttes om til App.js igen, for at give bedre overblik
//og for at se om den så er på alle sider

export const NavBar = () => {
    return (
        <div>
            <nav className="navBar">
                <ul>
                    <Link to="/forside">Front Page</Link>
                </ul>
                <ul>
                    <Link to="/allShows">View All Available Shows</Link> <br/>
                </ul>
                <ul>
                    <Link to="/createShow">Create Show</Link> <br/>
                </ul>
            </nav>
        </div>
    )
}
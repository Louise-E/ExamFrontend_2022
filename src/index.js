import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import App from "./App"
import "./css/index.css";
import GetAllShows from "./components/getAllShows";
import CreateShow from "./components/CreateShow";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/forside" element={<App/>}> </Route>
            <Route path="/allShows" element={<GetAllShows/>}> </Route>
            <Route path="/createShows" element={<CreateShow/>}> </Route>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <h1 className="backLinkH2">There's nothing here!</h1>
                        <p className="backLink">
                            <Link to="/forside">To go back click here!</Link>
                        </p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>
);
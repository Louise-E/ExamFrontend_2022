import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import App from "./App"
import "./css/index.css";
import CreateTimeline from "./components/CreateTimeline";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/forside" element={<App />}> </Route>
            <Route path="/createtimeline" element={<CreateTimeline/>}> </Route>
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <h1 className="backLinkH2">There's nothing here!</h1>
                        <p className="backLink">
                            <Link to ="/forside">To go back click here!</Link>
                        </p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>
);
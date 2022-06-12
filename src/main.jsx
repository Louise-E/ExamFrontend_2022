import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/style.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
          </Route>
          <Route path="*" element={
              <div className="errorPage">
                  <h2>Ooops!</h2>
                  <h3>Looks like there is nothing here, check the URL is correct</h3>
              </div>
          }/>
      </Routes>
  </BrowserRouter>
);

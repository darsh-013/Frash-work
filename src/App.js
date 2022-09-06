import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home/Home";
import Login from "./Componens/SignIn/Login";
import Support from "./Componens/Support/Support";
import Features from "./Componens/Features/Features";
import './App.css';
import Resources from "./Componens/Resources/Resources";
import Contact from "./Componens/ContactUs/Contact";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/"
                     element={<Home/>}
              />
              <Route path="/signin"
                     element={<Login/>}
              />
              <Route path="/support"
                     element={<Support/>}
              />
              <Route path="/features"
                     element={<Features/>}
              />
              <Route path="/resources"
                     element={<Resources/>}
              />
              <Route path="/contact"
                     element={<Contact/>}
              />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Pages/About";
import Achievements from "./Pages/Achievements";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Dashboard from "./Pages/Home/Dashboard";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;

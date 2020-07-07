import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <Switch>
          <Route path="/projects" render={() => <Projects />} />
          <Route path="/aboutme" render={() => <AboutMe />} />
          <Route path="/" exact render={() => <Home />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

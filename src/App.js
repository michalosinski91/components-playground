import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar />

      <div className="main-container" key="main">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/aboutme" render={() => <AboutMe />} />
            <Route path="/" exact render={() => <Home />} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

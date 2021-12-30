import React from "react";
import "./App.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import About from "./pages/About";

import Navbar from "./components/Navbar";

import SortedR from './pages/SortedR';

import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          timeout={250}
          classNames="fade"
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms/" component={Rooms} />
            <Route exact path="/about/" component={About} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route exact path="/results-rooms/" component={SortedR} />
            <Route component={Error} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
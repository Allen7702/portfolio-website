import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useSound from "use-sound";
import {
  isBrowser,
} from "react-device-detect";


import Home from "./Home";
import NotFound from "./components/common/layout/NotFound";
import Sidebar from "./components/common/navbar/Sidebar";
import Navbar from "./components/common/navbar/Navbar";


import PrivateRoute from "./utils/PrivateRoute";
import WillBeLive from "./components/common/layout/WillBeLive";

import "./App.css";

import { 
  // DARK_MODE_ON, 
  // DARK_MODE_OFF, 
  LOGOUT 
} from "./redux/actions/types.js";
import store from "./store";

import lightBackground from "./resources/sounds/lightBackground.mp3";
import darkBackground from "./resources/sounds/darkBackground.mp3";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/auth";
import BlogAuthRoute from "./utils/BlogAuthRoute";

function App({
  sidebar: { hover },
  // Redux States
  settings: { sound, displayMode, music },
}) {
  
  const [playBackgroundLight, { stop }] = useSound(lightBackground, {
    volume: 0.2,
  });
  const [playBackgroundDark, { stop: stop2 }] = useSound(darkBackground, {
    volume: 0.2,
  });

  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });

   

    if (music && displayMode) {
      stop();
      playBackgroundDark();
    }

    if (!music && displayMode) {
      stop();
      stop2();
    }

    if (!music && !displayMode) {
      stop();
      stop2();
    }

    if (music && !displayMode) {
      stop2();
      playBackgroundLight();
    }

  }, [music, displayMode]);

  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".complete-screen");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    //
    return null;
  }

  if (true) {
    
      return (
          <Router>
          <Switch>
          <Route exact path='/' component={Home} />
          </Switch>
          </Router>
        )
    
  } 
 
}

App.propTypes = {
  sidebar: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
  settings: state.settings,
});

const mapActionsToProps = {
}

export default connect(mapStateToProps, mapActionsToProps)(App);

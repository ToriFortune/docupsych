import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Patients from "./pages/Patients";
import Providers from "./pages/Providers";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import NavBar from "./component/NavBar";
import Landing from "./component/Landing";
import Appointment from "./pages/Appointment"
import "./App.css";



function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/providers" component={Providers} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/appointments" component={Appointment} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

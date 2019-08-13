import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Patients from "./pages/Patients";
import Providers from "./pages/Providers";
import { ToastContainer, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import NavBar from "./component/NavBar";
import Landing from "./component/Landing/Landing";
import Appointment from "./pages/Appointment"
import Signup from "./pages/Signup"
import "./App.css";



function App() {
  return (
    <Router>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          transition={Zoom}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover
        />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/providers" component={Providers} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/patients/:id" component={Appointment} />
          <Route exact path ="/signup" component= {Signup}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

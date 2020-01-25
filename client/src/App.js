import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthAdminToken from "./utils/setAuthAdminToken";
import { setCurrentAdmin, logoutAdmin } from "./actions/authAdminAction";
import SetAuthStudentToken from "./utils/SetAuthStudentToken";

import { Provider } from "react-redux";
import Store from "./store/index";

import LandingPage from "./Components/LandingPage/LandingPage";
import AdminDashboard from "./Components/adminDashboard/Index";
import StudentDashboard from "./Components/studentDashboard/Index";
import AdminLogin from "./Components/adminLogin/index";
import store from "./store/index";
import InstructorHome from "./Components/InstructorPages/InstructorHome/InstructorHome";

//check for token
if (localStorage.jwtToken) {
  //set auth token header auth
  setAuthAdminToken(localStorage.jwtToken);
  //decode token and get admin info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  //set admin and isAuthenticated
  store.dispatch(setCurrentAdmin(decoded));
  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout admin
    store.dispatch(logoutAdmin());
    //TODO clear admin account
    // window.location.href = '/adminlogin';
  }
}

if (localStorage.jwtToken) {
  //set auth token header auth
  SetAuthStudentToken(localStorage.jwtToken);
  //decode token and get student info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  //set student and isAuthenticated

  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout student

    //TODO clear student account
    // window.location.href = '/studentlogin';
  }
}

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/adminlogin" component={AdminLogin} />
            <Route path="/admindashboard" component={AdminDashboard} />
            <Route path="/StudentDashboard" component={StudentDashboard} />
            <Route path="/InstructorHome/:id" component={InstructorHome} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

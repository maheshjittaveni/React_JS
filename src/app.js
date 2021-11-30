import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUsPage from "./pages/about-us"
import ContactUsPage from "./pages/contact";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import LandingPage from "./pages/landing";
import MailPage from "./pages/mail";

import "./css/style.css";

class Application extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/aboutus" component={AboutUsPage}></Route>
        <Route path="/contactus" component={ContactUsPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/home" component={HomePage}></Route> 
        <Route path="/mail" component={MailPage}></Route>       
      </Switch>
      </BrowserRouter>

    )
  }
}

export default Application;

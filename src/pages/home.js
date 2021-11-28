import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class HomePage extends Component{
  render(){
    return(
      <div>
        <h1 className="heading">This is a Home Page </h1>
        <NavLink to="/login">Click here to go to login page</NavLink>
        <br></br>
        <NavLink to="/contactus">Click here to go to contact us page</NavLink>
        <br></br>
        <NavLink to="/aboutus">Click here to go to about us page</NavLink>
        <br></br>
        <NavLink to="/register">Click here to go to register page</NavLink>        
      </div>
    )
  }
}

export default HomePage;
import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class HomePage extends Component{
  render(){
    return(
      <div>
        <h1 className="heading">This is a HomePage page</h1>
        <NavLink to="/login">back to login page</NavLink>
        <br></br>
        <NavLink to="/contact">Click here to go to contact page</NavLink>
      </div>
    )
  }
}

export default HomePage;
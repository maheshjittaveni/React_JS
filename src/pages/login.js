import React, {Component} from "react";
import { NavLink } from "react-router-dom";


class LoginPage extends Component{
  render(){
    return(
      <div>
        <h1 className="heading">This is a login page</h1>
        <NavLink to="/home">Clik here to got to home page</NavLink>
      </div>
    )
  }
}

export default LoginPage;
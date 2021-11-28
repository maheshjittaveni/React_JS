import React, {Component} from "react";
import { NavLink } from "react-router-dom";


class LoginPage extends Component{
  render(){
    return(
      <div className="login-page">
        <h1 className="heading">This is a login page</h1>
        <NavLink to="/home">Clik here to got to home page</NavLink>
        <div className="login-form">
          <form className="login_page">
            <input type="text" className="textBox" placeholder="Username" /><br></br>
            <input type="password" className="textPass" placeholder="Password" /><br></br>
            <input type="submit" className="btnSubmit" value="Log in"/>
          </form>
        </div>
      </div>
      
    )
  }
}

export default LoginPage;
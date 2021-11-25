import React, {Component} from "react";
import "./css/style.css";

class Application extends Component{
  render(){
    return(
      <body>
        <div class="center">
            <h1>Login</h1>
            <form method="post">
                <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" required/>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass">Forgot password?</div>
                <input type="submit" value="Login"/>
                <div className="Signup_link">Not a member?<a href="#">Sign Up</a>
                </div>
            </form>
        </div>
    </body>
    )
  }
}

export default Application;

import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class LoginPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      email_id : "",
      password : ""
    }
  }

  onChangeEmail = (event) => {
    // console.log(event.target.value)
    this.setState({
      email_id : event.target.value
    })
  }

  onChangePassword = (event) => {
    // console.log(event.target.value)
    this.setState({
      password : event.target.value
    })
  }

  onSubmitLogin(){
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <h1>This is a Login Page</h1>
        <NavLink to="/home">Click here, to go Home Page</NavLink>
        <div className="m-top-10">
          <label>Please enter your Email ID :</label>
          <input type="text" placeholder="Enter your email id..." 
          onChange={this.onChangeEmail}/>
        </div>
        <div className="m-top-10">
          <label>Please enter your Password :</label>
          <input type="password" placeholder="Enter your password..." 
          onChange={this.onChangePassword} />
        </div>
        <div className="m-top-10">
          <button onClick={() => this.onSubmitLogin()}>Login</button>
        </div>
      </div>
    )
  }
}

export default LoginPage;
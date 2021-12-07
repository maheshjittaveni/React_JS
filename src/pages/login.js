import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class LoginPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      email_id : "",
      password : "",
      isPasswordVisible : false,
      email_id_invalid:false,
      password_invalid:false
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
    // console.log(this.state)
    if(this.state.email_id === ""){
      this.setState({
        email_id_invalid : true
      })
    }else{
      this.setState({
        email_id_invalid : false
      })
    }

    if(this.state.password === ""){
      this.setState({
        password_invalid : true
      })
    }
    else{
      this.setState({
        password_invalid : false
      })
    }
  }

  isPasswordVisible(){
    this.setState({
      isPasswordVisible : !this.state.isPasswordVisible
    })
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
          { this.state.email_id_invalid && <span className="error-message">Please enter a valid email id</span>}
        </div>
        <div className="m-top-10">
          <label>Please enter your Password :</label>
          <input type={this.state.isPasswordVisible ? "text" : "password"} placeholder="Enter your password..." 
          onChange={this.onChangePassword} />
          {
            this.state.isPasswordVisible ? 
            <img src={require("../images/eye-open.jpg").default} className="eye-image" onClick={() => this.isPasswordVisible()}/>
            :
            <img src={require("../images/eye-close.png").default} className="eye-image" onClick={() => this.isPasswordVisible()}/>
          }

          {this.state.password_invalid && <span className="error-message">Please enter a valid password</span>}
          
        </div>
        <div className="m-top-10">
          <button onClick={() => this.onSubmitLogin()}>Login</button>
        </div>
      </div>
    )
  }
}


export default LoginPage;
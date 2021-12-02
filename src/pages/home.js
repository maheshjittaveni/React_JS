import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class HomePage extends Component{

  constructor(props){
    super(props);
    this.state = {
      message : ''
    }
  }

  checkVotingAge(){
    var value = prompt("Enter your age :");
    var age = parseInt(value);

    if(age >= 18){
      //console.log("This user is Eligible for Vote");
      this.setState({
        message : "This user is Eligible for Vote"
      })
    }
    else{
      //console.log("This user is NOT Eligible for Vote");
      this.setState({
        message : "This user is NOT Eligible for Vote"
      })
    }
  }

  render(){
    return(
      <div>
        <h1>This is a Home Page</h1>
        <NavLink to="/login">Back to Login page</NavLink>
        <br></br>
        <NavLink to="/contact">Click here, to go Contact Page</NavLink>
        <br></br>
        <NavLink to="/register">Click here, to go register Page</NavLink>
        <br></br>
        <button onClick={() => this.checkVotingAge()}>Click to run Method</button>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default HomePage;
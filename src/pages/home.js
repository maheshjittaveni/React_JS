import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class HomePage extends Component{

  constructor(props){
    super(props);
    this.state = {
      message : '',
      isImageVisible : true,
      isContentVisible : true
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

  hideImage(){
    this.setState({
      isImageVisible : false
    })
  }

  showImage(){
    this.setState({
      isImageVisible : true
    })
  }

  checkCondition(){
    this.setState({
      isContentVisible : !this.state.isContentVisible
    })
  }

  render(){
    var name = "Karthick Kumar";
 
    return(
      <div>
        <h1>This is a Home Page</h1>
        <NavLink to="/login">Back to Login page</NavLink>
        <br></br>
        <NavLink to="/contact">Click here, to go Contact Page</NavLink>
        <br></br>
        <NavLink to="/signup">Click here, to go Register Page</NavLink>
        <br></br>
        <button onClick={() => this.checkVotingAge()}>Click to run Method</button>
        <h1>{this.state.message}</h1>
        <h1>{name}</h1>

        <h1>Inline IF  condition</h1>

        <button onClick={() => this.hideImage()}>Hide Image</button>
        <button onClick={() => this.showImage()}>Show Image</button>
        
        { this.state.isImageVisible && 
          <div>
            <img src={require("../images/img1.png").default} className="image"/>
            
            <img src={"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349"} className="image"/>
          </div> 
        }

        <h1>Inline IF ELSE condition</h1>
        <button onClick={() => this.checkCondition()}>Check condition</button>
        {
          this.state.isContentVisible ? 
          <div>
            <h1>User is Authenticated Successfully</h1>
          </div>
          :
          <div>
            <h1>Authenticated UnAuthorized to Login</h1>
          </div>
        }
        
      </div>
    )
  }
}

export default HomePage;
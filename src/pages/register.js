import React, {Component} from "react";

class RegisterPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      first_name : "",
      last_name : "",
      email_id : "",
      password : "",
      gender : "",
      date_of_birth: "",
      hobbies : [],
      address : "",
      city: ""
    }
  }

  onHandlleFormData = (event) => {
     //console.log(event.target.value, event.target.name)
     if(event.target.name === "hobbies"){
       if(event.target.checked){
         this.state.hobbies.push(event.target.value);
       }
       else{
        var index = this.state.hobbies.indexOf(event.target.value);
        this.state.hobbies.splice(index, 1);
       }
       this.setState({
         hobbies : this.state.hobbies
       })
     }else{
       this.setState({
         [event.target.name] : event.target.value
       })
     }
  }

  onCreateUser(){
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <h1>This is a Register Page</h1>
        <div className="m-top-10">
          <label>Please enter your First Name :</label>
          <input type="text" placeholder="Enter your first name..." 
          onChange={this.onHandlleFormData} name="first_name"
          />
        </div>
        <div className="m-top-10">
          <label>Please enter your Last Name :</label>
          <input type="text" placeholder="Enter your last name..." 
          onChange={this.onHandlleFormData} name="last_name"
          />
        </div>
        <div className="m-top-10">
          <label>Please enter your Email ID :</label>
          <input type="text" placeholder="Enter your email id..." 
          onChange={this.onHandlleFormData} name="email_id"
          />
        </div>
        <div className="m-top-10">
          <label>Please enter your Password :</label>
          <input type="password" placeholder="Enter your passowrd..." 
          onChange={this.onHandlleFormData} name="password"
          />
        </div>
        <div className="m-top-10">
          <label>Select your Gender :</label>
          <input type="radio" name="gender" value="male" onChange={this.onHandlleFormData}/>Male
          <input type="radio" name="gender" value="female" onChange={this.onHandlleFormData}/>Female
          <input type="radio" name="gender" value="n/a" onChange={this.onHandlleFormData}/>Others
        </div>
        <div className="m-top-10">
          <label>Select your DOB :</label>
          <input type="date" onChange={this.onHandlleFormData} name="date_of_birth"/>
        </div>
        <div className="m-top-10">
          <label>Select your Hobbies :</label>
          <input type="checkbox" value="Cricket" name="hobbies" onChange={this.onHandlleFormData}/>Cricket
          <input type="checkbox" value="FootBall" name="hobbies" onChange={this.onHandlleFormData}/>FootBall
          <input type="checkbox" value="Hockey" name="hobbies" onChange={this.onHandlleFormData}/>Hockey
          <input type="checkbox" value="Chess" name="hobbies" onChange={this.onHandlleFormData}/>Chess
          <input type="checkbox" value="Tennis" name="hobbies"  onChange={this.onHandlleFormData}/>Tennis
          <input type="checkbox" value="BasketBall" name="hobbies" onChange={this.onHandlleFormData}/>BasketBall
          <input type="checkbox" value="Golf" name="hobbies" onChange={this.onHandlleFormData}/>Golf
        </div>
        <div className="m-top-10">
          <label>Please enter your Address :</label>
          <textarea placeholder="Enter your address..." name="address" onChange={this.onHandlleFormData}></textarea>
        </div>
        <div className="m-top-10">
        <label>Please select your City :</label>
          <select onChange={this.onHandlleFormData} name="city">
            <option>Select any city value</option>
            <option>Hyderabd</option>
            <option>Banglore</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Chennai</option>
            <option>Warangal</option>
          </select>
        </div>
        <div className="m-top-10">
          <button onClick={() => this.onCreateUser() }>Create User</button>
        </div>
      </div>
    )
  }
}

export default RegisterPage;
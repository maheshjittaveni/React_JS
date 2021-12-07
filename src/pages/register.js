import React, {Component} from "react";

class RegisterPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      register : {
        first_name : "",
        last_name : "",
        email_id : "",
        password : "",
        gender : "",
        date_of_birth: "",
        hobbies : [],
        address : "",
        city: ""
      },
      error : {
        first_name : false,
        last_name : false,
        email_id : false,
        password : false,
        gender : false,
        date_of_birth: false,
        hobbies : false,
        address : false,
        city: false
      }
    }
  }

  onHandlleFormData = (event) => {
     //console.log(event.target.value, event.target.name)
     if(event.target.name === "hobbies"){
       if(event.target.checked){
         this.state.register.hobbies.push(event.target.value);
       }
       else{
        var index = this.state.register.hobbies.indexOf(event.target.value);
        this.state.register.hobbies.splice(index, 1);
       }
       this.setState({
        register : {...this.state.register, hobbies : this.state.register.hobbies}
       })
     }else{
       this.setState({
        register : {...this.state.register, [event.target.name] : event.target.value}
       })
     }
  }

  onCreateUser(){
    for(var key in this.state.register){
      if(this.state.register[key] === ""){
        this.state.error[key] = true;
      }else{
        this.state.error[key] = false;
      }
    }
    
    this.setState({
      error : this.state.error
    })
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
          {this.state.error.first_name && <span className="error-message">Please enter your first name</span>}
        </div>
        <div className="m-top-10">
          <label>Please enter your Last Name :</label>
          <input type="text" placeholder="Enter your last name..." 
          onChange={this.onHandlleFormData} name="last_name"
          />
          {this.state.error.last_name && <span className="error-message">Please enter your last name</span>}
        </div>
        <div className="m-top-10">
          <label>Please enter your Email ID :</label>
          <input type="text" placeholder="Enter your email id..." 
          onChange={this.onHandlleFormData} name="email_id"
          />
          {this.state.error.email_id && <span className="error-message">Please enter your email id</span>}
        </div>
        <div className="m-top-10">
          <label>Please enter your Password :</label>
          <input type="password" placeholder="Enter your passowrd..." 
          onChange={this.onHandlleFormData} name="password"
          />
          {this.state.error.password && <span className="error-message">Please enter your password</span>}
        </div>
        <div className="m-top-10">
          <label>Select your Gender :</label>
          <input type="radio" name="gender" value="male" onChange={this.onHandlleFormData}/>Male
          <input type="radio" name="gender" value="female" onChange={this.onHandlleFormData}/>Female
          <input type="radio" name="gender" value="n/a" onChange={this.onHandlleFormData}/>Others
          {this.state.error.gender && <span className="error-message">Please select your gender</span>}
        </div>
        <div className="m-top-10">
          <label>Select your DOB :</label>
          <input type="date" onChange={this.onHandlleFormData} name="date_of_birth"/>
          {this.state.error.date_of_birth && <span className="error-message">Please select your date of birth</span>}
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
          {this.state.error.hobbies && <span className="error-message">Please select your hobbies</span>}
        </div>
        <div className="m-top-10">
          <label>Please enter your Address :</label>
          <textarea placeholder="Enter your address..." name="address" onChange={this.onHandlleFormData}></textarea>
          {this.state.error.address && <span className="error-message">Please enter your address</span>}
          </div>
        <div className="m-top-10">
        <label>Please select your City :</label>
          <select onChange={this.onHandlleFormData} name="city">
            <option>Select any city value</option>
            <option>Chennai</option>
            <option>Banglore</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Mysore</option>
            <option>Cochin</option>
          </select>
          {this.state.error.city && <span className="error-message">Please select your city</span>}
        </div>
        <div className="m-top-10">
          <button onClick={() => this.onCreateUser() }>Create User</button>
        </div>
      </div>
    )
  }
}

export default RegisterPage;
import React, {Component} from "react";
import axios from "axios";


class StarredPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : "",
      job : ""
    }
  }

  onHandleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onFormSubmit(){
    var api_url = "https://reqres.in/api/users";

    axios.post(api_url, this.state)
        .then((response) => {
          var serverData = response.data;
          console.log(serverData);
          alert("User Profile has created")
        })
        .catch((error) => {
          console.log(error);
        })
  }
  onUpdateForm(){
    var api_url = "https://reqres.in/api/users/2";

    axios.put(api_url, this.state)
        .then((response) => {
          var serverData = response.data;
          console.log(serverData);
        })
        .catch((error) => {
          console.log(error);
        })
  }

  render(){
    return(
      <div>
        <h1>This is a Starred Page</h1>
        <div>
        <lable>Enter your Name :</lable>
          <input type="text" placeholder="Please enter your name.." 
          onChange={this.onHandleInput} name="name"/>
        </div>
        <div>
        <lable>Enter your Job Description :</lable>
          <input type="text" placeholder="Please enter your job.." 
          onChange={this.onHandleInput} name="job"/>
        </div>
        <div>
          <button onClick={() => this.onFormSubmit()}>Submit (POST)</button>
          <button onClick={() => this.onUpdateForm()}>Update (PUT)</button>
        </div>
      </div>
    )
  }
}

export default StarredPage;
import React, {Component} from "react";
import axios from "axios";

class InboxPage extends Component{
  loadUsers(){
var api_url="https://reqres.in/api/users?page=2";
axios.get(api_url)
      .then((response)=>{
//console.log(response)
var serverData=response.data;
this.setState({
  userList=serverData.data
})

      })
      .catch((error)=>{
console.log(console.error());
alert("Server is down, please try after sometimes.....")
      });

  }
  render(){
    var users=this.state.userList.map((value,index)=>{
      return(
        <tr key={index}>
          <td>{value.first_name}</td>
          <td>{value.last_name}</td>
          <td>{value.email}</td>
          <td>
          <img src={value.avatar} className="profile-image"/>
          </td>
        </tr>
      )
    })
    return(
      <div>
        <h1>This is a Index Page</h1>
        <button onClick={()=>this.loadUsers()} >Load users from API</button>

        <table id="customers">
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Profile pic</th>              
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    )
  }
}

export default InboxPage;
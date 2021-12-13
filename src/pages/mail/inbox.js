import React, {Component} from "react";
import axios from "axios";


class InboxPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      userList : []
    }
  }

  loadUsers(){
    var api_url = "https://reqres.in/api/users?page=2";

    axios.get(api_url)
        .then((response) => {
            var serverData = response.data;
            this.setState({
              userList : serverData.data
            })
        })
        .catch((error) => {
            console.log(error);
            alert("Server is down, pls try after sometimes..")
        }); 

  }

  render(){

    var users = this.state.userList.map((value, index) => {
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
        <h1>This is a Inbox Page</h1>
        <button onClick={() => this.loadUsers()}>Load Users from API</button>

        <table id="customers">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Profile Pic</th>
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
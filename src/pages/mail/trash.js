import React, {Component} from "react";
import axios from "axios";

class TrashPage extends Component{

  onDelete(){
    var api_url = "https://reqres.in/api/users/2";

    axios.delete(api_url)
        .then((response) => {
          var serverData = response.data;
          console.log(serverData);
          alert("Successfully Deleted the user")
        })
        .catch((error) => {
          console.log(error)
          alert("Server down, pls try again later")
        })
  }
  
  render(){
    return(
      <div>
        <h1>This is a Trash Page</h1>
        <button onClick={() => this.onDelete()}>Delete API</button>
      </div>
    )
  }
}

export default TrashPage;
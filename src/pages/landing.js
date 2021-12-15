import React, {Component} from "react";
import axios from "axios";

class LandingPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      userList : []
    }
  }

  listUserProfile(){
    var url = "http://localhost:4000/api/user/list";

    axios.get(url)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
  }

  render(){
    return(
      <div>
        <h1>This is Landing Page</h1>
        <button onClick={() => this.listUserProfile()}>Load User Information</button>
      </div>
    )
  }
}

export default LandingPage;
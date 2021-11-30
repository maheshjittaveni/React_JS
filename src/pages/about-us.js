import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class AboutUsPage extends Component{
  render(){
    return(
      <div>
        <h1 className="heading">This is a about us page</h1>
        <NavLink to="/home">Clik here to go to home page</NavLink>
      </div>
    )
  }
}

export default AboutUsPage;
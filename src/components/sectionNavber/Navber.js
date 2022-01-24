import React ,{Component} from "react";
import "./navber.css"

class Navber extends Component { 
  render() {
    return(
      <div className="nav">
        <div className="container">
          <div className="row">
            <span>Start Bootstrap</span>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default Navber
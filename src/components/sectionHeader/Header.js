import React ,{Component} from "react";
import "./header.css"

class Header extends Component {
  render() {
    return(
      <header>
        <div className="row">
          <div className="content">
            <h2>Your Favorite Place for Free Bootstrap Themes</h2>
            <p>Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
            <button className="btn">Find Out More</button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
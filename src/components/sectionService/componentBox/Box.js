import React ,{Component} from "react";
import "./box.css"


class Box extends Component {
  state ={
    iconOne:<i class="far fa-gem"></i>
  }
  render(){
    return(
      <div className="box">
        {this.state.iconOne}
        <h4>Sturdy Themes</h4>
        <p>Our themes are updated regularly to keep them bug free!</p>
      </div>
    )
  }
}

export default Box;

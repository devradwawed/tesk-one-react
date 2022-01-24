import React ,{Component} from "react";
import "./need.css"
class Need extends Component {
  render(){
    return(
      <section className="need">
        <div className="container">
          <h2>We've got what you need!</h2>
          <p>Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
          <button className="btn">Get Started!</button>
        </div>
      </section>
    )
  }
}

export default Need
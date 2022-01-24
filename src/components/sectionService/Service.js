import React ,{Component} from "react";
import "./service.css" 
import Box from "./componentBox/Box";

class Service extends Component {
  state ={
    name:"asda",
    desc:'zdfdsf dsfsdf'
  }
  render(){
    return(
      <section className="service">
        <h2>At Your Service</h2>
        <div className="container">
          <div className="row">
            <Box/>
            <Box/>
            <Box/>
            <Box/>
          </div>
        </div>
      </section>
    )
  }
}

export default Service

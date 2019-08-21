import React, { Component } from "react";
//import changeImage from `${process.env.PUBLIC_URL}/img/change.jpg`;
import "./Coffe.css";

class Coffe extends Component {
  render() {
    return (
      <div>
        {this.props.coffeImage ? (
          <div className="card border border-dark change-bg my-3">
            <h5 className="card-header change-bg">Your Coffee</h5>
            <div className="card-body">
              <img
                src={`/img/${this.props.coffe.img}`}
                alt="test"
                className="card-img-top coffe-image"
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Coffe;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Sugar.css";

class Sugar extends Component {
  render() {
    let sugarValue = {
      width: `${this.props.sugar}%`,
      height: "100%",
      backgroundColor: "yellow"
    };

    return (
      <div className="card pb-3 mb-3 border border-dark sugar-bg">
        <h5 className="card-header sugar-bg">The amount of sugar</h5>
        <div className="display card-body">
          <button onClick={this.props.reduceSugar}>
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          </button>
          <div className="display_sugar">
            <div style={sugarValue}></div>
          </div>
          <button onClick={this.props.increseSugar}>
            <FontAwesomeIcon icon={faPlusCircle} className="icon" />
          </button>
        </div>
      </div>
    );
  }
}

export default Sugar;

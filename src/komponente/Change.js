import React, { Component } from 'react';
//import changeImage from `${process.env.PUBLIC_URL}/img/change.jpg`;
import '../Change.css';

class Change extends Component {

  render() {
    return (
      <div>
        {
          this.props.showChange ?
            <div className="card border border-dark change-bg">
                <h5 className="card-header change-bg">Your Change</h5>
                <div className="card-body">
                  <img src='/img/change.jpg' className="card-img-top change-img" alt="change" />
                </div>
            </div>
          : null
        }
      </div>
    );
  }

}

export default Change;

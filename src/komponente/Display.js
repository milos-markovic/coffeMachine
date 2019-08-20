import React, { Component } from 'react';
import '../Display.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

class Display extends Component {



  render() {

      let time = {
        width: `${this.props.timeForPreparation}%`,
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }



      return (
        <div className="card display bg-dark text-warning" >
            <div className="card-body">
              <h4>{this.props.showMessage}</h4>

              <div id="coffeImage">
                {
                  this.props.showCoffeeImage ?
                  <div id="coffeePicture" className="text-center coffeIcon">
                    <FontAwesomeIcon icon={faMugHot} className="icon"/>
                  </div>
                  : null
                }
              </div>
              <div id="changeMessage">
                <h5>{this.props.showChangeMessage}</h5>
              </div>
              <div id="timeLine">
                {
                  this.props.isPreparationTime ?
                  <div className="timeOfPripare mt-4">
                    <div style={time}>

                    </div>
                  </div>
                  : null
                }
              </div>

            </div>
        </div>
      );
  }

}

export default Display;

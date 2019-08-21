import React, { Component } from "react";
import MoneyInput from "../MoneyInput/MoneyInput";

class Money extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: ""
    };
  }

  handleInsertMoney = e => {
    e.preventDefault();

    if (!this.props.isInsertMoney) {
      let enteredMoney = this.state.money;
      let min = this.props.min();
      let max = this.props.max();
      // console.log(enteredMoney, min, max);
      if (enteredMoney > 0 && enteredMoney > min && enteredMoney < max) {
        this.props.setMessage("Unesite secer i odaberite proizvod");

        this.resetMoneyState();

        this.props.confirmInsertMoney(enteredMoney);
      }
    }
  };

  setMoneyState = money => {
    this.setState({
      money: money
    });
  };

  resetMoneyState = () => {
    this.setState({
      money: ""
    });
  };

  render() {
    return (
      <div className="card p-4 mb-3 border border-dark bg-products">
        <form
          action=""
          method="POST"
          className="form-inline"
          onSubmit={this.handleInsertMoney}
        >
          <MoneyInput
            type="text"
            name="money"
            className="form-control mr-2 text-dark"
            placeholder="Here insert your money"
            setMessage={this.props.setMessage}
            setMoneyState={this.setMoneyState}
            money={this.state.money}
            max={this.props.max}
            min={this.props.min}
          />
          <input
            type="submit"
            name="btn_push"
            id="btn_push"
            value="Push"
            className="btn btn-danger"
          />
        </form>
      </div>
    );
  }
}

export default Money;

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

    if (this.props.moneyIsInsert === false) {
      let enteredMoney = this.state.money;
      let min = this.props.min();
      // console.log(enteredMoney, min, max);
      if (enteredMoney > 0 && enteredMoney >= min) {
        this.props.setMessage(
          `Uneli ste ${enteredMoney} dinara, odaberite kolicinu secera i odaberite proizvod`
        );

        this.resetMoneyState();

        this.props.confirmInsertMoney(enteredMoney);

        this.props.resetSugar();

        this.resetInputAndButton();
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

  resetInputAndButton = () => {
    // input text
    let inputText = document.querySelector("#inputText");
    inputText.disabled = true;

    // btn
    let btn = document.querySelector("#btn_push");
    btn.disabled = true;
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
            id="moneyInput"
            placeholder="Here insert your money"
            setMessage={this.props.setMessage}
            setMoneyState={this.setMoneyState}
            moneyIsInsert={this.moneyIsInsert}
            money={this.state.money}
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

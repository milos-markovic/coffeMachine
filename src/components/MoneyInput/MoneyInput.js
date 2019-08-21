import React, { Component } from "react";

export default class MoneyInput extends Component {
  insertMoney = e => {
    let input = e.target.value;
    let max = this.props.max();
    let min = this.props.min();
    // set state on many component
    this.props.setMoneyState(input);

    if (input !== "") {
      // if (this.props.moneyIsInsert === false) {
      if (isNaN(input)) {
        this.props.setMessage("Unesite brojeve kao karaktere");
      } else {
        let moneyNumber = Number(input);

        if (moneyNumber === 0 || moneyNumber < min) {
          this.props.setMessage(`Morate uneti minimalno ${min} dinara`);
        } else {
          // set money in money state
          this.props.setMoneyState(moneyNumber);

          this.props.setMessage(
            "Uneli ste ispravne vrednosti, sad pritisnite dugme 'push', da bi uneli novac"
          );
        }
      }
      // }
    } else {
      this.props.setMessage("Molimo vas unesite novac");
    }
  };

  resetInput = () => {
    document.querySelector("#inputText").disabled = true;
  };

  render() {
    return (
      <div>
        <input
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          className={this.props.className}
          onChange={this.insertMoney}
          value={this.props.money}
          id="inputText"
        />
      </div>
    );
  }
}

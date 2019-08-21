import React, { Component } from "react";

export default class MoneyInput extends Component {
  insertMoney = e => {
    let input = e.target.value;
    let max = this.props.max();
    let min = this.props.min();
    // set state on many component
    this.props.setMoneyState(input);

    if (input !== "") {
      if (isNaN(input)) {
        this.props.setMessage("Unesite brojeve kao karaktere");
      } else {
        let moneyNumber = Number(input);

        if (moneyNumber === 0 || moneyNumber < min || moneyNumber > max) {
          this.props.setMessage(
            `Mozete uneti vrednosti izmedju ${min} i ${max} vrednosti`
          );
          // reset state in money
        } else {
          this.props.setMoneyState(moneyNumber);

          this.props.setMessage(
            "Uneli ste ispravne vrednosti, sad pritisnite dugme push"
          );
        }
      }
    } else {
      this.props.setMessage("Molimo vas unesite novac");
    }
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
        />
      </div>
    );
  }
}

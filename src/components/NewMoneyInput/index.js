import React, { Component } from "react";

export default class NewMoneyInput extends Component {
  constructor(props) {
    if (isNaN(props.min) || isNaN(props.max)) {
      throw new Error("Invalid arguments for min or max properties");
    }
    super(props);
    this.state = {
      inputValue: props.value
    };
    this.onChange = this.onChangeHandler.bind(this);
  }

  render() {
    const { name, placeholder, className, id } = this.props;
    return (
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={className}
        onChange={this.onChange}
        value={this.state.inputValue}
        id={id}
      />
    );
  }

  onChangeHandler(event) {
    const inputValue = event.target.value;
    const numberValue = this.getInputNumberValue(inputValue);
    if (numberValue > 0 && this.isInRange(numberValue)) {
      this.setState({
        inputValue: numberValue
      });
    }
    if (numberValue === 0) {
      this.setState({
        inputValue: ""
      });
    }
  }

  getInputNumberValue(value) {
    if (value === "") {
      return 0;
    }
    // The substituted value will be contained in the result variable
    const result = value.replace(/[^\d]+/gm, "");
    return result;
  }

  isInRange(value) {
    const numberValue = parseInt(value, 10);
    return numberValue <= this.props.max;
  }
}

import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Nav from "../Nav/Nav";
import Display from "../Display/Display";
import Sugar from "../Sugar/Sugar";
import Money from "../Money/Money";
import Change from "../Change/Change";
import Products from "../Products/Products";
import Coffe from "../Coffe/Coffe";

class App extends Component {
  constructor(props) {
    super(props);
    const products = [
      { name: "Irish Coffe", price: 70, img: "iris.jpg", id: 1 },
      { name: "Espresso", price: 90, img: "espresso.jpg", id: 2 },
      {
        name: "Espresso with milk",
        price: 100,
        img: "espresso.jpg",
        id: 3
      },
      { name: "Instant Coffe", price: 60, img: "instant.jpg", id: 4 },
      {
        name: "Instant Coffe with milk",
        price: 70,
        img: "instant.jpg",
        id: 5
      },
      { name: "Macchiato", price: 100, img: "machiato.jpg", id: 6 },
      { name: "Cappuchino", price: 110, img: "capuchino.jpg", id: 7 },
      { name: "Turkis", price: 35, img: "turkish.jpg", id: 8 }
    ];
    const maxPrice = products.reduce((acc, product) => {
      if (product.price > acc) {
        acc = product.price;
      }

      return acc;
    }, 0);

    const minPrice = products.reduce((acc, product) => {
      if (product.price < acc) {
        acc = product.price;
      }

      return acc;
    }, maxPrice);

    this.state = {
      products,
      message: "Molimo vas unesite novac",
      isInsertMoney: false,
      insertMoney: 0,
      sugar: 100,
      selectedProduct: null,
      isSelectProduct: false,
      showPreparationTime: false,
      timeForPreparation: 0,
      isCooked: false,
      showChange: false,
      coffeImage: false,
      changeMessage: "",
      isAddMoney: false,
      addMoney: 0,
      maxPrice,
      minPrice
    };
  }

  resetState = () => {
    this.setState({
      message: "Molimo vas unesite novac",
      isInsertMoney: false,
      insertMoney: 0,
      sugar: 100,
      selectedProduct: null,
      isSelectProduct: false,
      showPreparationTime: false,
      timeForPreparation: 0,
      isCooked: false,
      showChange: false,
      coffeImage: false,
      changeMessage: "",
      isAddMoney: false,
      addMoney: 0
    });
  };

  setMessage = mes => {
    this.setState({
      message: mes
    });
  };

  setChangeMessage = mes => {
    this.setState({
      changeMessage: mes
    });
  };

  resetSugarValue = () => {
    if (this.state.insertMoney) {
      this.setState({
        sugar: 0
      });
    }
  };

  increseSugar = () => {
    this.setState((prevState, props) => ({
      sugar: prevState.sugar + 20
    }));

    if (this.state.sugar >= 100) {
      this.setState({
        sugar: 100
      });
    }
  };

  reduceSugar = () => {
    this.setState((prevState, props) => ({
      sugar: prevState.sugar - 20
    }));

    if (this.state.sugar <= 0) {
      this.setState({
        sugar: 0
      });
    }
  };

  confirmInsertMoney = money => {
    if (money) {
      this.setState(
        {
          insertMoney: money,
          isInsertMoney: true
        },
        () => this.resetSugarValue()
      );
    }
  };

  selectProduct = product => {
    // select product and set isselect product
    if (this.state.isInsertMoney) {
      this.setState({
        selectedProduct: product,
        isSelectProduct: true
      });

      // inserted money
      let insertedMoney = this.state.insertMoney;

      if (insertedMoney >= product.price) {
        this.cookProduct(product);
      }
    } else {
      this.resetState();
    }
  };

  checkPreparationState = () => {
    if (this.state.timeForPreparation === 90) {
      clearInterval(this.interval);

      this.setState({ isCooked: true }, () => this.finishCooking());
    }
  };

  updateCokingTime = () => {
    this.setState(
      {
        timeForPreparation: this.state.timeForPreparation + 10
      },
      this.checkPreparationState()
    );
  };

  showPreparationTime = () => {
    this.interval = setInterval(this.updateCokingTime, 1000);

    this.setState({
      isPreparationTime: true
    });
  };

  cookProduct = product => {
    this.setMessage(`Proizvod ${product.name} se sprema, Molim vas sacekajte`);

    console.log("U toku je kuvanje proizvoda");

    this.showPreparationTime();
  };

  finishCooking = () => {
    console.log("vreme je da se zavrsava");

    let insertedMoney = this.state.insertMoney;
    let selectedProductPrice = this.state.selectedProduct.price;

    let change = insertedMoney - selectedProductPrice;

    this.showChange(change);

    this.showFinishedProduct();

    this.resetSelectedProduct();
  };

  showChange = change => {
    this.setMessage(`Vas proizvod je gotov`);

    if (change > 0) {
      this.setState({
        showChange: true
      });

      this.setChangeMessage(`Imate kusur od ${change} dinara`);
    }

    return;
  };

  showFinishedProduct = () => {
    this.setState({
      coffeImage: true,
      isPreparationTime: false
    });

    setTimeout(this.resetState, 10000);
  };

  max = () => {
    let prices = this.state.products.map(product => {
      return product.price;
    });

    return Math.max(...prices);
  };

  min = () => {
    let prices = this.state.products.map(product => {
      return product.price;
    });

    return Math.min(...prices);
  };

  resetSelectedProduct = () => {
    let products = document.querySelectorAll(".productElement");

    products.forEach(function(product) {
      product.classList.remove("disableElement");
    });

    let inputText = document.querySelector("#inputText");
    inputText.disabled = false;

    // btn
    let btn = document.querySelector("#btn_push");
    btn.disabled = false;
  };

  render() {
    return (
      <div className="App pb-2">
        <Nav />
        <div className="container my-4">
          <div className="row">
            <div className="col-md-8">
              <div className="card bg-products p-4">
                <Display
                  showMessage={this.state.message}
                  isPreparationTime={this.state.isPreparationTime}
                  timeForPreparation={this.state.timeForPreparation}
                  showCoffeeImage={this.state.coffeImage}
                  showChangeMessage={this.state.changeMessage}
                />
                <Products
                  products={this.state.products}
                  selectProduct={this.selectProduct}
                  insertMoney={this.state.insertMoney}
                  isInsertMoney={this.state.isInsertMoney}
                  showPreparationTime={this.showPreparationTime}
                />
              </div>
            </div>
            <div className="col-md-4">
              <Sugar
                sugar={this.state.sugar}
                increseSugar={this.increseSugar}
                reduceSugar={this.reduceSugar}
              />
              <Money
                setMessage={this.setMessage}
                confirmInsertMoney={this.confirmInsertMoney}
                moneyIsInsert={this.state.isInsertMoney}
                max={this.state.maxPrice}
                min={this.state.minPrice}
                resetSugar={this.resetSugarValue}
              />
              <Coffe
                coffeImage={this.state.coffeImage}
                coffe={this.state.selectedProduct}
              />
              <Change showChange={this.state.showChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

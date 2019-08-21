import React, { Component } from "react";
import "./Products.css";

//  import irish from '../img/iris.jpg';
// import capuchino from '../img/capuchino.jpg';
// import espresso from '../img/espresso.jpg';
// import instant from '../img/instant.jpg';
// import machiato from '../img/machiato.jpg';
// import turkish from '../img/turkish.jpg';

class Products extends Component {
  findProduct = id => {
    if (!this.props.isSelectProduct) {
      let findProduct = null;

      this.props.products.forEach(function(product) {
        if (product.id === id) {
          findProduct = product;
        }
      });
      this.props.selectProduct(findProduct);
    }
  };

  //
  // cook_coffee = () => {
  //   if(this.props.isInsertMoney){
  //     let insertedMoney = this.state.insertedMoney;
  //     let priceOfSelectedProduct = this.state.selectedProduct.price;
  //
  //     if(insertedMoney >= priceOfSelectedProduct){
  //
  //     //  this.props.setMessage("U toku je priprema proizvoda, malo sacekajte");
  //       this.props.setPreparationTime();
  //       this.setState({
  //         insertedMoney: false
  //       })
  //     }
  //   }
  //
  // }

  render() {
    const products = this.props.products.map(product => {
      return (
        <div className="col-md-3 mb-3 test" key={product.id}>
          <div
            className="card product"
            onClick={() => {
              this.findProduct(product.id);
            }}
          >
            <img
              src={`/img/${product.img}`}
              alt="test"
              className="card-img-top product-img"
            />
            <div className="card-header">
              <h6 className="card-title m-0 text-center">{product.name}</h6>
              <p className="m-0 text-center font-weight-bold">
                {product.price} din
              </p>
            </div>
          </div>
        </div>
      );
    });

    return <div className="row">{products}</div>;
  }
}

export default Products;

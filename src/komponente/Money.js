import React, { Component } from 'react';

class Money extends Component {

  constructor(props) {
    super(props);
    this.state = {
      money: ''
    }
  }

  insertMoney = (e) =>{

    if( !this.props.isSelectProduct ){

      let input = e.target.value;

      if(input !== '' && input != '0'){
        input = Number(input);

        if(isNaN(input)){
          this.props.setMessage(`Molimo vas unesite brojeve kao karaktere za cenu proizvoda`);
        }else{
          this.setState({
            money: input
          });

          this.props.setMessage(`Uneli ste ispravne vrednosti sad pritisnite dugme 'push'`);
        }
      }

    }

  }

  handleInsertMoney = (e) =>{
    e.preventDefault();

    if( !this.props.isInsertMoney ){

        let money = null;

        if( !this.props.isAddMoney ){

          money = this.state.money;

          if( money > 0 && money != '0' ){
            this.props.setMessage(`Uneli ste ${money} dinara,\nMolimo vas unesite potrebnu kolicinu secera i izaberite proizvod`);

            this.props.setInsertMoney(money);
          }

        }else{

          money = this.props.addMoney;

          this.props.setMessage(` Uspesno ste dodali novce, selektujte proizvod ponovo`);

          if(this.props.insertMoney){

            let newInsertMoney = this.props.insertMoney + money;

            this.props.setInsertMoney(newInsertMoney);
          }
        }

        this.setState({
          money: ''
        });

    }

  }

  render() {
    return (
      <div className="card p-4 mb-3 border border-dark bg-products">
        <form action="" method="POST" className="form-inline">
          <input type="text" name="money" id="money" className="form-control mr-2 text-dark" placeholder="Here insert your money" onChange={this.insertMoney} value={this.state.money} />
          <input type="submit" name="btn_push" id="btn_push" value="Push" className="btn btn-danger" onClick={this.handleInsertMoney} />
        </form>
      </div>
    );
  }

}

export default Money;

import React, { Component } from 'react';
import StockTrade from "./StockTrade";

export default class AllPositions extends Component {

  componentWillMount() {
    this.setState({trades: []});
  }

  componentDidMount() {
    fetch('/trades')
      .then(res => res.json())
      .then(trades => {
        this.setState({trades: trades});
      });
  }

  removeTrade(idx) {
    let arr = this.state.trades;
    arr.splice(idx, 1);
    this.setState({
      trades: arr
    });
  };

  render() {
    return (
      <table className='stockTradeList'>
        <tbody>
          {
            this.state.trades.map((item, i) => {
              return (
                <StockTrade key={i} index={i} type={item.type} date={item.date} symbol={item.symbol} volume={item.volume} price={item.price} deleteTradeFunc={this.removeTrade.bind(this)}/>
              )
            })
          }
        </tbody>
      </table>
    );
  }
}
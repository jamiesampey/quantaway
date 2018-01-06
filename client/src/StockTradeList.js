import React, { Component } from 'react';
import StockTrade from "./StockTrade";

export default class StockTradeList extends Component {
  componentWillMount() {
    this.setState({stockTrades: []})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      stockTrades: nextProps.trades
    });
  };

  removeTrade = (idx) => {
    let arr = this.state.stockTrades;
    arr.splice(idx, 1);
    this.setState({
      stockTrades: arr
    });
  };

  render() {
    return (
      <table className='stockTradeList'>
        <tbody>
          {
            this.state.stockTrades.map((item, i) => {
              return (
                <StockTrade key={i} index={i} type={item.type} date={item.date} symbol={item.symbol} volume={item.volume} price={item.price} deleteTrade={this.removeTrade}/>
              )
            })
          }
        </tbody>
      </table>
    );
  }
}
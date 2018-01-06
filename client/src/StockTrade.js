import React, { Component } from 'react';
import './StockTrade.css';

export default class StockTrade extends Component {

  delete = () => this.props.deleteTrade(this.props.index);

  render() {
    return (
      <tr>
        <td className='stockTradeCell'><span>{this.props.index + 1}.</span></td>
        <td className={`stockTradeCell ${this.props.type === TradeType.BUY ? 'buyTradeType' : 'sellTradeType'}`}>
          <span>{this.props.type}</span>
        </td>
        <td className='stockTradeCell'>
          <span>{`${this.props.volume} shares of ${this.props.symbol} on ${new Date(this.props.date).toDateString()} at $${this.props.price}`}</span>
        </td>
        <td className='stockTradeCell'>
          <button onClick={this.delete}>Remove</button>
        </td>
      </tr>
    )
  }
}

/**
 * The two possible stock trade types
 * @enum {number}
 */
export const TradeType = {
  BUY: "BUY",
  SELL: "SELL"
};

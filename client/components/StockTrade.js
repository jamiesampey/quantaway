import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StockTrade.css';

export default class StockTrade extends Component {

  delete() {
    this.props.deleteTradeFunc(this.props.index);
  }

  render() {
    return (
      <tr>
        <td className='stockTradeCell'>
          <Link to={`/positions/${this.props.symbol}`}>{this.props.symbol}:</Link>
        </td>
        <td className={`stockTradeCell ${this.props.type === TradeType.BUY ? 'buyTradeType' : 'sellTradeType'}`}>
          <span>{this.props.type}</span>
        </td>
        <td className='stockTradeCell'>
          <span>{`${this.props.volume} shares of ${this.props.symbol} on ${new Date(this.props.date).toDateString()} at $${this.props.price}`}</span>
        </td>
        <td className='stockTradeCell'>
          <button onClick={this.delete.bind(this)}>Remove</button>
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
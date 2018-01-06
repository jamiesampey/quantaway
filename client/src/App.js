import React, { Component } from 'react';
import './App.css';
import StockTradeList from "../../client/src/StockTradeList";

export default class App extends Component {

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Stock Dashboard</h1>
        </header>
        <div className='Dashboard'>
          <StockTradeList trades={this.state.trades}/>
        </div>
      </div>
    )
  }

}

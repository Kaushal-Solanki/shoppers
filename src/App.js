import React, { Component } from 'react';
import Grocery from './component/Grocery'
import Shopping from './component/ShoppingBag'
import States from './component/States'
import './App.css';
import PocketMoney from './component/PocketMoney'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 class="display-4 text-center">Shoppers Stop!</h1>
            <p className="text-center">Welcome to the best online Shopping websites</p>

          </div>
          <PocketMoney />
          <Grocery />
          <Shopping />
          <States />
        </div>
      </div>
    );
  }
}

export default App;

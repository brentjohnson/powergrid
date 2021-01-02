import React from 'react';
import Status from './Status.js'
import TurnOrder from './TurnOrder.js'
import CityTracker from './CityTracker.js'
import Auction from './Auction.js'
import Map from './Map.js'
import Market from './Market.js'
import Player from './Player.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Status></Status>
        <TurnOrder></TurnOrder>
        <CityTracker></CityTracker>
        <Auction></Auction>
        <Map></Map>
        <Market></Market>
        <Player></Player>
        <Player></Player>
        <Player></Player>
        <Player></Player>
      </div>
    );
  }
}

export default App;

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
  constructor(props) {
    super(props);
    this.state = {
      players: [
        { name: 'Alan' },
        { name: 'Bobby' },
        { name: 'Chris' },
        { name: 'Dave' },
      ]
    };
  }

  render() {

    const players = this.state.players.map(player => {
      return (
        <Player name={player.name}></Player>
      );
    });

    return (
      <div className="App">
        <Status></Status>
        <TurnOrder></TurnOrder>
        <CityTracker></CityTracker>
        <Auction></Auction>
        <Map></Map>
        <Market></Market>
        {players}
      </div>
    );
  }
}

export default App;

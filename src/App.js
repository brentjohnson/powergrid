import React from 'react';

import Auction from './Auction.js'
import CityTracker from './CityTracker.js'
import CreateJoin from './CreateJoin.js'
import Map from './Map.js'
import Market from './Market.js'
import Player from './Player.js'
import Status from './Status.js'
import TurnOrder from './TurnOrder.js'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamecode: null,
      players: []
    };
  }

  creategame(name) {
    this.setState({ players: [{ name: name }] });
    this.setState({ gamecode: 'asdf' });
  }

  joingame(gamecode, name) {
    let playerlist = [...this.state.players];
    playerlist.push({ name: name });
    this.setState({ players: playerlist });
    this.setState({ gamecode: gamecode });
  }

  render() {

    const players = this.state.players.map(player => {
      return (
        <Player name={player.name}></Player>
      );
    });

    return (
      <div className="App">
        <Status />
        <CreateJoin
          onCreate={(x) => this.creategame(x)}
          onJoin={(x, y) => this.joingame(x, y)} />
        <TurnOrder />
        <CityTracker />
        <Auction />
        <Map />
        <Market />
        {players}
      </div>
    );
  }
}

export default App;

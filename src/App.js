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
      players: [],
      step: 0,  // Game step.  0 = Not started
    };
  }

  creategame(name) {
    this.setState({ players: [{ name: name }] });
    this.setState({ gamecode: 'asdf' });
    this.setState({ step: 1 });
  }

  joingame(gamecode, name) {
    let playerlist = [...this.state.players];
    playerlist.push({ name: name });
    this.setState({ players: playerlist });
    this.setState({ gamecode: gamecode });
    this.setState({ step: 1 });
  }

  render() {

    const players = this.state.players.map(player => {
      return (
        <Player name={player.name}></Player>
      );
    });

    if (this.state.step === 0) {
      return (
        <div className="App">
          <Status />
          <CreateJoin
            onCreate={(x) => this.creategame(x)}
            onJoin={(x, y) => this.joingame(x, y)} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Status />
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
}

export default App;

import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <div className="Player">
        Player: {this.props.name}
      </div>
    );
  }
}

export default Player;

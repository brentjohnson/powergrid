import React from 'react';

class CreateJoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gamecode: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeGameCode = this.handleChangeGameCode.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeGameCode(event) {
    this.setState({ gamecode: event.target.value });
  }

  render() {
    return (
      <div className="CreateJoin">
        Name:<input value={this.state.name} onChange={this.handleChangeName}></input>
        <button onClick={() => this.props.onCreate(this.state.name)}>Create Game</button>
        <br />
        Game Code:<input value={this.state.gamecode} onChange={this.handleChangeGameCode}></input>
        <button
          onClick={() => this.props.onJoin(this.state.gamecode, this.state.name)}>Join Game</button>
      </div >
    );
  }
}

export default CreateJoin;

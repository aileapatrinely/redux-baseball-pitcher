import React, { Component } from 'react';
import { connect } from 'react-redux';

class PitcherForm extends Component {
  state = {
    currentPitcher: 'Maud Nelson',
    pitcherList: ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'],
    newPitcher: '',
  };

  handlePitcherNameChange = (event) => {
    this.setState({
      newPitcher: event.target.value,
    });
  };

  handlePitcherSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_PITCHER',
      payload: {
        newPitcher: this.state.newPitcher,
        pitcherList: this.state.pitcherList,
      },
    });
    this.setState({
      newPitcher: '',
      pitcherList: [...this.state.pitcherList, this.state.newPitcher],
    });
  };

  handlePitcherSelectClick = (selectedPitcher) => () => {
    this.setState({
      currentPitcher: selectedPitcher,
    });
  };

  render() {
    return (
      <form onSubmit={this.handlePitcherSubmit}>
        <input
          type="text"
          value={this.state.newPitcher}
          onChange={this.handlePitcherNameChange}
          placeholder="New Pitcher Name"
        />
        <button type="submit">Add Pitcher</button>
      </form>
    );
  }
}

export default connect()(PitcherForm);

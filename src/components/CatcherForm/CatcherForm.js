import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatcherForm extends Component {
  state = {
    currentCatcher: 'Elston Howard',
    catcherList: ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'],
    newCatcher: '',
  };

  handleCatcherNameChange = (event) => {
    this.setState({
      newCatcher: event.target.value,
    });
  };

  handleCatcherSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_CATCHER',
      payload: {
        catcherList: [...this.state.catcherList, this.state.newCatcher],
      },
    });
    this.setState({
      newCatcher: '',
      catcherList: [...this.state.catcherList, this.state.newCatcher],
    });
  };

  render() {
    return (
      <form onSubmit={this.handleCatcherSubmit}>
        <input
          type="text"
          value={this.state.newCatcher}
          onChange={this.handleCatcherNameChange}
          placeholder="New Catcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
    );
  }
}

export default connect()(CatcherForm);

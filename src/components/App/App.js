import React, { Component } from 'react';
import { connect } from 'react-redux';
import PitcherForm from '../PitcherForm/PitcherForm';
import CatcherForm from '../CatcherForm/CatcherForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Baseball Pitchers</h1>
        <h2>On the Mound: {this.state.currentPitcher}</h2>
        <h2>Behind the Plate: {this.state.currentCatcher}</h2>
        <div>Total Pitchers: {this.state.pitcherList.length}</div>
        <div>Total Catchers: {this.state.catcherList.length}</div>
        <h3>All Pitchers</h3>
        <PitcherForm />
        <ul>
          {this.state.pitcherList.map((pitcher) => (
            <li onClick={this.handlePitcherSelectClick(pitcher)}>{pitcher}</li>
          ))}
        </ul>
        <h3>All Catchers</h3>
        <CatcherForm />
        <ul>
          {this.state.catcherList.map((catcher) => (
            <li onClick={this.handleCatcherSelectClick(catcher)}>{catcher}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

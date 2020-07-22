import React, { Component } from 'react';
import { connect } from 'react-redux';
import PitcherForm from '../PitcherForm/PitcherForm';
import CatcherForm from '../CatcherForm/CatcherForm';

class App extends Component {
  handleCatcherSelectClick = (selectedCatcher) => () => {
    this.setState({
      currentCatcher: selectedCatcher,
    });
  };

  handlePitcherSelectClick = (selectedPitcher) => () => {
    this.setState({
      currentPitcher: selectedPitcher,
    });
  };

  render() {
    return (
      <div>
        <h1>Redux Baseball Pitchers</h1>
        {/* <h2>On the Mound: {this.state.currentPitcher}</h2>
        <h2>Behind the Plate: {this.state.currentCatcher}</h2>
        <div>Total Pitchers: {this.state.pitcherList.length}</div>
        <div>Total Catchers: {this.state.catcherList.length}</div> */}
        <h3>All Pitchers</h3>
        <PitcherForm />
        <ul>
          {this.props.store.addPitcher.map((pitcher) => (
            <li onClick={this.handlePitcherSelectClick(pitcher)}>{pitcher}</li>
          ))}
        </ul>
        <h3>All Catchers</h3>
        <CatcherForm />
        <ul>
          {this.props.store.addCatcher.map((catcher) => (
            <li onClick={this.handleCatcherSelectClick(catcher)}>{catcher}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(App);

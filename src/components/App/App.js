import React, { Component } from 'react';
import { connect } from 'react-redux';
import PitcherForm from '../PitcherForm/PitcherForm';
import CatcherForm from '../CatcherForm/CatcherForm';
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import TotalCatchers from '../TotalCatchers/TotalCatchers';

class App extends Component {
  state = {
    currentPitcher: 'Maud Nelson',
    pitcherList: ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'],
    newPitcher: '',
    currentCatcher: 'Elston Howard',
    catcherList: ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'],
    newCatcher: '',
  };

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
        <h2>On the Mound: {this.state.currentPitcher}</h2>
        <h2>Behind the Plate: {this.state.currentCatcher}</h2>
        <TotalPitchers />
        <TotalCatchers />
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

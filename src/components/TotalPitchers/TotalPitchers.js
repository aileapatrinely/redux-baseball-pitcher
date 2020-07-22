import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalPitchers extends Component {
  render() {
    return <div>Total Pitchers: {this.props.store.addPitcher.length}</div>;
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(TotalPitchers);

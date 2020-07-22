import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalCatchers extends Component {
  render() {
    return <div>Total Catchers: {this.props.store.addCatcher.length}</div>;
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(TotalCatchers);

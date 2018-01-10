import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import firebase from 'firebase';

export class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <h2>Loaded Firebase features: </h2>
        <p className="availableFeatures">{this.props.fireabaseAvailableFeatures.join(', ')}</p>
        <hr />
        <h2 className="countHeader">Current Count: {this.props.count+""}</h2>
        <button className="incrementBtn" onClick={() => this.props.incrementCount('unused payload')}>Increment count</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    count: state.myState.count,
    fireabaseAvailableFeatures: state.myState.fireabaseAvailableFeatures
  };
}

export default connect(mapStateToProps, actions)(App);

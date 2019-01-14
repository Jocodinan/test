import React, { Component } from "react";
import * as actions from './actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainContent from './components/main-content/index';

export class App extends Component{
  render(){
    return (
      <section className="app-container">
        <MainContent { ...this.props } />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
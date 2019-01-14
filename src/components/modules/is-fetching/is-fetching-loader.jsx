import React, { Component } from 'react';

export default class IsFetchingLoader extends Component{
  render(){
    return(
      <div className="box-loader">
        <div className="loader"></div>
      </div>
    );
  }
}
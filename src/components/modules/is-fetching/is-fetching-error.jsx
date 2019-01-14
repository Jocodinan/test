import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IsFetchingError extends Component{
  render(){
    const { error } = this.props;

    return(
      <p className="error-message">{ error }</p>
    )
  }
}

IsFetchingError.propTypes = {
  error: PropTypes.string
}
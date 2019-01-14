import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IsFetchingLoader from './is-fetching-loader';
import IsFetchingError from './is-fetching-error';

export default class IsFetching extends Component{
  render(){
    const { isFetching, error } = this.props;

    if(isFetching)
      return <IsFetchingLoader />

    if(error)
      return <IsFetchingError error={ error } />

    return this.props.children;

  }
}

IsFetching.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.string
}
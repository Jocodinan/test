import React, { Component } from 'react';

import IsFetching from '../modules/is-fetching/index';
import MainContentPosts from './main-content-posts';

export default class MainContent extends Component{
  componentDidMount(){
    this.props.getPosts();
    this.props.getComments();
  }
  render(){
    const { generalStates } = this.props;
    return (
      <IsFetching 
        isFetching={ generalStates.get('isFetchingPosts') || generalStates.get('isFetchingComments')}
        error={ generalStates.get('error') }
      >
        <h1>Last 10 Posts</h1>
        <MainContentPosts { ...this.props } />
      </IsFetching>
    );
  }
}
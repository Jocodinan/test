import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IsFetchingError from '../modules/is-fetching/is-fetching-error';
import SinglePost from '../modules/post/index';

export default class MainContentPosts extends Component{
  render(){
    const { entities, pagination } = this.props;
    if(!entities.get('posts').size){ return <IsFetchingError error="No se han encontrado posts" /> }

    const filteredData = entities.get('posts').sortBy((d) => d.get('id')).filter((d) => d.get('title')).slice(0, pagination);

    return filteredData.map((post, index) => {
      return <SinglePost key={ `post-${post.get('id')}` } post={ post } showComments={ index === 0 } { ...this.props }/>
    });
  }
}

MainContentPosts.propTypes = {
  pagination: PropTypes.number
}

MainContentPosts.defaultProps = {
  pagination: 10
}


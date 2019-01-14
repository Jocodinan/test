import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comments from './comments';

export default class SinglePost extends Component{
  render(){
    const { post, showComments } = this.props;

    return (
      <article className="box">
        <h3>{ post.get('title') }</h3>
        { showComments ? <Comments { ...this.props } /> : null }
      </article>
    )
  }
}

SinglePost.propTypes = {
  post: PropTypes.object,
  showComments: PropTypes.bool
}
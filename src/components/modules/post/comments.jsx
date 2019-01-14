import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comments extends Component{
  getComments(){
    const { post, entities } = this.props,
          postComments = entities.get('comments').filter((comment) => {
            return comment.get('postId') === post.get('id');
          }).slice(0, 3);

     return postComments.map((comment) => {
       return (
        <div className="comment-box" key={ `comment-${comment.get('id')}` }>
          <h4>{ `${comment.get('name')} - ${ comment.get('email') }:`  }</h4>
          <p>{ comment.get('body') }</p>
        </div>
        )
     })
  }
  render(){
    return(
      <div className="comments-box">
        <h3>Comentarios:</h3>
        <ul>
          { this.getComments() }
        </ul>
      </div>
    )
  }
}

Comments.propTypes={
  post: PropTypes.object
}
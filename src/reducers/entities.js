import * as Immutable from 'immutable';

export function entities(state = Immutable.fromJS({
  posts: [],
  comments: []
}), action){
  switch(action.type){
    case 'GET_POSTS_END':
      return state.set('posts', Immutable.fromJS(action.data))
    case 'GET_COMMENTS_END':
      return state.set('comments', Immutable.fromJS(action.data))
    default:
      return state;
  }
}
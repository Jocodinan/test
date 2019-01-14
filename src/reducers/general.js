import * as Immutable from 'immutable';

export function generalStates(state = Immutable.fromJS({
  isFetchingPosts: true,
  isFetchingComments: true,
  error: ''
}), action){
  switch(action.type){
    case 'GET_POSTS_START':
      return state.withMutations((map) => {
        map.set('isFetchingPosts', true)
          .set('error', '')
      })
    case 'GET_POSTS_ERROR':
      return state.withMutations((map) => {
        map.set('isFetchingPosts', false)
          .set('error', action.error)
      })
    case 'GET_POSTS_END':
      return state.set('isFetchingPosts', false)
    case 'GET_COMMENTS_START':
      return state.withMutations((map) => {
        map.set('isFetchingComments', true)
          .set('error', '')
      })
    case 'GET_COMMENTS_ERROR':
      return state.withMutations((map) => {
        map.set('isFetchingComments', false)
          .set('error', action.error)
      })
    case 'GET_COMMENTS_END':
      return state.set('isFetchingComments', false)
    default:
      return state;
  }
}
const errorMessage = `Error inesperado, intente nuevamente, tipo de error:`;

export function getPosts(){
  return function action(dispatch){
    dispatch(getPostsStart());
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if(!response.ok){ dispatch(getPostsError(`${errorMessage} ${ response.status }`)); console.error(`${errorMessage} ${ response.status }`) }
        return response.json();
      })
      .then((response) => {
        dispatch(getPostsEnd(response));
      })
      .catch((response) => {
        dispatch(getPostsError(`${errorMessage} ${ response.status }`));
        console.error(`${errorMessage} ${ response.status }`)
      });
  }
}

function getPostsStart(){
  return {
    type: 'GET_POSTS_START'
  }
}

function getPostsError(error){
  return {
    type: 'GET_POSTS_ERROR',
    error
  }
}

function getPostsEnd(data){
  return {
    type: 'GET_POSTS_END',
    data
  }
}

export function getComments(){
  return function action(dispatch){
    dispatch(getCommentsStart());
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        if(!response.ok){ dispatch(getCommentsError(`${errorMessage} ${ response.status }`)); console.error(`${errorMessage} ${ response.status }`) }
        return response.json();
      })
      .then((response) => {
        dispatch(getCommentsEnd(response));
      })
      .catch((response) => {
        dispatch(getCommentsError(`${errorMessage} ${ response.status }`));
        console.error(`${errorMessage} ${ response.status }`)
      });
  }
}

function getCommentsStart(){
  return {
    type: 'GET_COMMENTS_START'
  }
}

function getCommentsError(error){
  return {
    type: 'GET_COMMENTS_ERROR',
    error
  }
}

function getCommentsEnd(data){
  return {
    type: 'GET_COMMENTS_END',
    data
  }
}
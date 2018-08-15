import { db } from '../firebase';

export const addPost = ({text}) => {
  return dispatch => {
    dispatch({type: 'ADD_POST_STARTED'});
    db.collection('posts').add({
      text: text,
      liked: false
    })
    .then(docRef => {
      console.log(docRef.id)
    })
  }
}
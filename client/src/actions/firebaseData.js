import { db } from '../firebase';

export const fetchData = () => {
  return dispatch => {
    dispatch({type: 'FETCHING_DATA'});
    db.collection('posts')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id}`)
        })
      })
  }
}
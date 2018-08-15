export const posts = (state=[], action) => {
  switch(action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          text: action.text,
          liked: action.liked
        }
      ];
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.id)
    case 'TOGGLE_LIKE':
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            liked: !post.liked
          }
        } else return post
      })
    default: 
      return state;
  }
};

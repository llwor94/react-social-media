export const comments = (state=[], action) => {
  console.log(state)
  switch(action.type) {
    case 'ADD_COMMENT': 
      return [
        ...state,
        {
          id: action.id,
          postId: action.postId,
          comment: action.comment,
        }
      ];
    case 'DELETE_COMMENT':
      return state.filter(comment => comment.id !== action.id)
    default:
      return state;
  }
};


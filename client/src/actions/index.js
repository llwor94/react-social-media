import uuid from 'uuid/v4'

export const addComment = (postId, comment) => ({
  type: 'ADD_COMMENT',
  postId,
  comment,
  id: uuid()
});

export const deleteComment = id => ({
  type: 'DELETE_COMMENT',
  id,
});

export const addPost = text => ({
  type: 'ADD_POST',
  text,
});

export const deletePost = id => ({
  type: 'DELETE_POST',
  id,
})

export const toggleLike = id => ({
  type: 'TOGGLE_LIKE',
  id
})
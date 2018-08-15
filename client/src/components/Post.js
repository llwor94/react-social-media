import React from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getComments } from '../reducers';
import styled from 'styled-components';

const PostBox = styled.div`
  border: 1px solid black;
  width: 30rem;
`

const Post = ({ post, getPostComments, addComment, deleteComment, deletePost, toggleLike}) => {
  return (
    <PostBox>
      <p>Status: {post.text}</p>
      <button onClick={() => deletePost(post.id)}> &times; </button>
      <div>
      <button onClick={() => toggleLike(post.id)}>{post.liked ? 'unlike' : 'like'}</button>
        <p>Comments</p>
        {getPostComments(post.id).map(commentObj => (
          <p key={commentObj.id}>{commentObj.comment}
            <button onClick={() => deleteComment(commentObj.id)}> &times; </button>
          </p>
        ))}
      </div>
      <div>
        <input
          type="test"
          placeholder="add comment"
          onKeyDown={e =>{
            if (e.key === "Enter") {
              addComment(post.id, e.target.value);
              e.target.value = '';
            }
          }
          }
        />
      </div>
    </PostBox>
  );
};

const mapStateToProps = state => ({
  getPostComments: postId => {
   return getComments(state, postId)
  }
})

export default connect(
  mapStateToProps,
  actions
)(Post)



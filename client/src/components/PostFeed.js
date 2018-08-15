import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getPosts } from '../reducers';
import { Link } from 'react-router-dom';
import Post from './Post';

const Posts = styled.div`
  margin: 1rem auto;
  display: inline-block;
`

const PostFeed = props => (
  <Posts>
    {props.posts.map(post => (
      <Link to={`/posts/${post.id}`}>
        <Post key={post.id} post={post} />
      </Link>
      ))}
  </Posts>
)

const mapStateToProps = state => ({
  posts: getPosts(state)
});

export default connect(mapStateToProps)(PostFeed);

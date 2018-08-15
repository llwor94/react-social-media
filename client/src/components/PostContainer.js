import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../reducers';
import Post from './Post';

const PostContainer = ({ getCurrentPost, match }) => {
  return (
    <Fragment>
      <Post post={getCurrentPost(Number(match.params.id))} />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  getCurrentPost: id => {
    return getPost(state, id)
  }
})

export default connect(mapStateToProps)(PostContainer)
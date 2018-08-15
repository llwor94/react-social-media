import React from "react";
import { addPost } from "./actions/addPost";
import { connect } from "react-redux";
import { getPosts } from "./reducers";
import Post from "./components/Post";
import Header from './components/Header'
import { fetchData } from './actions/firebaseData'
import styled, { injectGlobal } from "styled-components";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`



const Posts = styled.div`
  margin: 1rem auto;
  display: inline-block;
`

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render () {
  return (
    <Main>
      <Header />
      <Posts>
      {this.props.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      </Posts>
      <div>
        <input
          type="text"
          placeholder="Add post"
          onKeyDown={e => {
            if (e.key === "Enter") {
              this.props.addPost(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
    </Main>
  );
}
}

const mapStateToProps = state => ({
  posts: getPosts(state),
});

export default connect(
  mapStateToProps,
  {addPost, fetchData}
)(App);

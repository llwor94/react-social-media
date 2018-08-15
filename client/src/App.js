import React from "react";
import PostFeed from "./components/PostFeed";
import Header from './components/Header';
import AddPost from './components/AddPost';
import PostContainer from './components/PostContainer';
import { Route } from 'react-router-dom';
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
`;

function App() {
  return (
    <Main>
      <Header />
      <Route exact path='/' component={ AddPost } />
      <Route exact path='/' component={ PostFeed } />
      <Route path='/posts/:id' component={ PostContainer } />   
    </Main>
  );
}

export default App;



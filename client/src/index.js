import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers'
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
  rootReducer, 
  {
    posts: [
      {
        id: 0,
        text: 'Lorem ipsum dolor sit amet',
        liked: false
      }
    ],
    comments: [
      {
        id: 0,
        postId: 0,
        comment: 'Comment ipsum',
        liked: false
      }
    ]
  }, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
document.getElementById('root'));

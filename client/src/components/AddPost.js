import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions'

class AddPost extends React.Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <form onSubmit={() => this.props.addPost(this.state.value)}>
        <input
          type="text"
          placeholder="Add post"
          value={this.state.value}
          onChange={this.state.handleChange}
        />
      </form>
    )
  };
};

export default connect(
  null,
  { addPost }
)(AddPost);
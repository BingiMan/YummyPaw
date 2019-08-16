import React from 'react'

export default class Comment extends React.Component {
  constructor() {
    super()
    this.state = {
      post:''
    }

  }
  handleFormSubmit = (ev) => {
    ev.preventDefault();
    const { id } = this.props.pet;
    ev.preventDefault();
    this.props.handleCreateComment(id, this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <div>
        <h3>Post Comment {this.props.currentUser} </h3>
        <input name="post" value={this.state.post} type="text" onChange={this.props.handleCommentChange} />
        <button onClick={this.handleFormSubmit}> Post Comment </button>
      </div>
    )
  }
}   
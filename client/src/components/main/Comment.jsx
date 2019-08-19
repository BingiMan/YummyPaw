import React from 'react'

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

  }




  render() {
    return (
      <div>
        <h3>Post Comment {this.props.currentUser.username} </h3>
        <input name="post" value={this.props.comments_form.post} type="text" onChange={this.props.handleCommentChange} />
        <button onClick={(e) => { this.props.handleSubmitComment(e, this.props.pet_id, this.props.user_id) }}> Post Comment </button>
      </div>
    )
  }
}   
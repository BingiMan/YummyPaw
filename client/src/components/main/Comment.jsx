import React from 'react'
import {createComment} from "../../services/comment";

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmitComment = async (currentPetId)  => {
    const petId = currentPetId;
    const data = {
      pet_id: currentPetId,
      post: this.state.post,
    };
    console.log(data);
    const comment = await createComment(petId, data);

    console.log(comment);
    // TODO: There is a better way to do this, but for now it works fine.
    this.resetAndReloadForm();
  };

  resetAndReloadForm = () => {
    window.location.reload();
  };

  render() {
    console.log(this.props);
    return (

        <div className="comment-edit">
          <h3 className="user-post">Post Comment {this.props.currentUser.name} </h3>
          <input className="comment-input" key={this.props.currentPet.id} name="post" value={this.state.post} type="text"
                 onChange={this.handleChange.bind(this)}/>
          <input name="pet_id" value={this.props.currentPet.id} type="hidden"/>
          <button className="comment-submit-btn" onClick={this.handleSubmitComment.bind(this, this.props.currentPet.id)}> Post Comment</button>
        </div>
    )
  }
}

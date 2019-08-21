import React from 'react'
import {createComment, deleteComment, updateComment} from "../../services/comment";

export default class EditComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hideComment: false,
            editComment: false,
            prevComment: '',
        }
    }

    handleUpdateComment = async (params) => {
        const comment = params[2];
        // console.log(this.state.prevComment);
        if (this.state.editComment) {
            const petId = params[0];
            const commentId = params[1];
            const data = {
                pet_id: petId,
                post: this.state.prevComment,
            };

            const result = await updateComment(petId, commentId, data);
            console.log(result);
            // TODO: There is a better way to do this, but for now it works fine.
            window.location.reload();
        }

        this.setState(prevState => ({
                hideComment: !prevState.hideComment,
                editComment: !prevState.editComment,
                prevComment: comment
            })
        );

    };

    handleChange(e) {
        this.setState({prevComment: e.target.value});
    }

    resetAndReloadForm = () => {
        window.location.reload();
    };

    handleDeleteComment = async (params) => {
        const petId = params[0];
        const commentId = params[1];
        const comment = await deleteComment(petId, commentId);

        // TODO: There is a better way to do this, but for now it works fine.
        this.resetAndReloadForm();
    };

    render() {
        console.log(this.props);
        return (
            <div key={this.props.postId} className="comment-wrapper">
                <p className={this.state.hideComment ? 'hide' : 'comment-text center-flex to-left'}>{this.props.post}</p>

                {/*input hidden when it is not for editing*/}
                <input className={this.state.editComment ? '' : 'hide'} type="text"
                       value={this.state.prevComment} onChange={this.handleChange.bind(this)}/>

                {/*edit Button*/}
                <span className="edit-btn center-flex to-right"
                      onClick={this.handleUpdateComment.bind(this, [this.props.currentPet.id, this.props.postId, this.props.post])}></span>
                {/*delete button*/}
                <span className="close-btn center-flex to-right to-left"
                      onClick={this.handleDeleteComment.bind(this, [this.props.currentPet.id, this.props.postId])}></span>
            </div>
        )
    }
}

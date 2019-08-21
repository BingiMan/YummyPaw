import React from 'react'
import Comment from './Comment'
import {withRouter} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {deleteComment, updateComment} from "../../services/comment";
import EditComment from "./EditComment";
import './mainStyle.css'

class SeeMoreVideos extends React.Component {
    constructor(props) {
        super(props);
    }

    handleHomeRedirect = async () => {
        this.props.history.push('/');
    };

    displayVideos = () => {
        return (
            <div>
                {
                    this.props.pets_form.is_cat === true ? this.displayCats() : this.displayDogs()
                }
            </div>
        )
    };

    displayCats = () => {
        return this.props.pets.cats.map(cat => (
            <div key={cat.id}>
                <h1 className="video-title">{cat.title}</h1>
                <ReactPlayer url={cat.video_url}/>
                {this.displayCommentForm(cat)}
            </div>
        ));
    };

    displayDogs = () => {
        return this.props.pets.dogs.map(dog => (
            <div key={dog.id}>
                <h1 className="video-title">{dog.title}</h1>
                <ReactPlayer  url={dog.video_url}/>
                {this.displayCommentForm(dog)}
            </div>
        ));
    };

    displayCommentForm = (currentPet) => {
        console.log(this.props.currentUser);

        return (
            <div>
                <Comment
                    comments_form={this.props.comments_form}
                    currentUser={this.props.currentUser}
                    currentPet={currentPet}
                />
                {this.displayCommentList(currentPet)}
            </div>
        );
    };

    displayCommentList = (currentPet) => {

        return currentPet.comments.map(com => {
            return (
                <div className="comment-background">
                <div className="comment-container">
                    <EditComment
                        post={com.post}
                        postId={com.id}
                        currentPet={currentPet}
                    />
                </div>
                </div>
            );
        });
    };

    render() {
        console.log(this.props);
        console.log(this.props.pets_form);

        const videosView = Object.keys(this.props.pets).length > 0 ? this.displayVideos() : null;

        return (
            <div>
                <h1 className="comment-section">ALL VIDEOS AND COMMENT SECTION</h1>
                <button className="back-home" onClick={this.handleHomeRedirect}>Go back Home</button>
                {videosView}
            </div>
        )
    }
}


export default withRouter(SeeMoreVideos)



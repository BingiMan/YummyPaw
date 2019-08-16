import React from 'react'
import Comment from './Comment'
import { withRouter } from 'react-router-dom'
import ReactPlayer from 'react-player'

class SeeMoreVideos extends React.Component {


  handleHomeRedirect = async () => {
    this.props.history.push('/')
  }


  render() {
    return (
      <div>
        <h1>HELLLOOOO WORLDDDD</h1>
        <h1>HELLLOOOO WORLDDDD</h1>
        <h1>HELLLOOOO WORLDDDD</h1>
        <button onClick={this.handleHomeRedirect}>Go back Home</button>
        {this.props.pets && (
          <div>
            {this.props.pets_form.is_cat === true || this.props.pets_form.is_cat === null ?
              this.props.pets.cats.map(cat => (
                <div key={cat.id}>
                  <ReactPlayer className="Video" url={cat.video_url} />
                  <p>{cat.title}</p>
                  <Comment
                    comments_form={this.props.comments_form}
                    comments={this.props.comments}
                    currentUser={this.props.currentUser}
                    handleCreateComment={this.props.handleCreateComment}
                    handleCommentChange={this.props.handleCommentChange}
                    pet={this.props.pet}

                  />
                  <div>{this.props.comments}</div>
                </div>
              ))
              :
              this.props.pets.dogs.map(dog => (
                <div key={dog.id}>
                  <ReactPlayer url={dog.video_url} />
                  {dog.title}
                </div>
              ))
            }
          </div>
        )}
      </div>
    )
  }
}
export default withRouter(SeeMoreVideos)
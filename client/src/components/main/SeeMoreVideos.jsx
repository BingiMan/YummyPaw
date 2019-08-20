import React from 'react'
import Comment from './Comment'
import { withRouter } from 'react-router-dom'
import ReactPlayer from 'react-player'

class SeeMoreVideos extends React.Component {
  constructor(props) {
    super(props);
  }


  handleHomeRedirect = async () => {
    this.props.history.push('/')
  }


  render() {
    console.log(this.props.pets_form)
    return (
      <div>
        <h1>HELLLOOOO WORLDDDD</h1>
        <h1>HELLLOOOO WORLDDDD</h1>
        <h1>HELLLOOOO WORLDDDD</h1>
        <button onClick={this.handleHomeRedirect}>Go back Home</button>
        {/*{this.props.pets ? (*/}
        {/*    <div>*/}
        {/*        {this.props.pets_form.is_cat === true || this.props.pets_form.is_cat === null ?*/}
        {/*            this.props.pets.cats.map(cat => (*/}
        {/*                <div key={cat.id}>*/}
        {/*                    <ReactPlayer url={cat.video_url} />*/}
        {/*                    <p>{cat.title}</p>*/}
        {/*                    <div>*/}
        {/*                        <div>*/}
        {/*                            comments*/}
        {/*                        </div>*/}
        {/*                        <div>*/}
        {/*                            <Comment*/}
        {/*                                currentUser={this.props.currentUser}*/}
        {/*                                // comments_form={this.props.comments_form}*/}
        {/*                                // handleCommentChange={this.props.handleCommentChange}*/}
        {/*                                // handleSubmitComment={this.props.handleSubmitComment}*/}
        {/*                                // handleDeleteComment={this.props.handleDeleteComment}*/}
        {/*                                // handleUpdateComment={this.props.handleUpdateComment}*/}
        {/*                                // comments={this.props.comments}*/}
        {/*                                // pets={this.props.pets}*/}
        {/*                            />*/}
        {/*                            {cat.comments.map(com => (*/}
        {/*                                <div key={com.id}>*/}
        {/*                                    <p>{com.post}</p>*/}
        {/*                                </div>*/}
        {/*                            ))}*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            ))*/}
        {/*            :*/}
        {/*            this.props.pets.dogs.map(dog => (*/}
        {/*                <div key={dog.id}>*/}
        {/*                    <ReactPlayer url={dog.video_url} />*/}
        {/*                    <h1>{dog.title}</h1>*/}
        {/*                </div>*/}
        {/*            ))*/}
        {/*        }*/}
        {/*    </div>*/}
        {/*) : ''}*/}
    </div>
    )
  }
}
export default withRouter(SeeMoreVideos)












{/* <Comment
                    comments_form={this.props.comments_form}
                    comments={this.props.comments}
                    currentUser={this.props.currentUser}
                    currentPet={cat.id}
                    commentPetAndUser={this.props.commentPetAndUser}
                    handleCommentChange={this.props.handleCommentChange}
                    handleSubmitComment={this.props.handleSubmitComment}
                    loadComments={this.props.loadComments}
                    handleDeleteComment={this.props.handleDeleteComment}
                    handleUpdateComment={this.props.handleUpdateComment}

                  />
                  {cat.comments.map(com => (
                    <div key={com.id}>
                      <p>{com.post}</p>
                    </div>
                  ))} */}
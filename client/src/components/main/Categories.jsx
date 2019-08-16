import React from 'react'
import './mainStyle.css'
import { fetchPet } from '../../services/pet';
import { withRouter } from 'react-router-dom'
import ReactPlayer from 'react-player'


class Categories extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     cats: [],
  //     dogs: []

  //   }
  // }

  // componentDidMount = async () => {
  //   const pets = await fetchPet();
  //   const cats = pets.cats;
  //   const dogs = pets.dogs;
  //   this.setState({
  //     cats: cats,
  //     dogs: dogs
  //   })
  // }

  handleAddRedirect = async (e) => {
    e.preventDefault()
    this.props.history.push('/addPet')
  }
  handleSeeMoreRedirect = async (e) => {
    e.preventDefault()
    this.props.history.push('/seeMore')
  }


  render() {

    return (
      <div>
        <h1>HELOOOOOOOOOOOOO</h1>
        <h1>HELOOOOOOOOOOOOO</h1>
        <button onClick={this.props.displayCat}> Cats </button>
        <button onClick={this.props.displayDog}>Dogs</button>
        <button onClick={this.handleAddRedirect}>Add Video</button>
        <button onClick={this.handleSeeMoreRedirect}>See more</button>
        {this.props.pets && (
          <div>
            {this.props.pets_form.is_cat === true || this.props.pets_form.is_cat === null ?
              this.props.pets.cats.slice(0, 5).map(cat => (
                <div key={cat.id}>
                  <ReactPlayer className="Video" url={cat.video_url} />
                  <p>{cat.title}</p>
                </div>
              ))
              :
              this.props.pets.dogs.slice(0, 5).map(dog => (
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
export default withRouter(Categories)
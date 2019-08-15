import React from 'react'
import './mainStyle.css'
import { fetchPet } from '../../services/pet';
import ReactPlayer from 'react-player'


export default class Categories extends React.Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      dogs: []

    }
  }

  componentDidMount = async () => {
    const pets = await fetchPet();
    const cats = pets.cats;
    const dogs = pets.dogs;
    this.setState({
      cats: cats,
      dogs: dogs
    })
  }



  render() {
 
    return (
      <div>
      <h1>HELOOOOOOOOOOOOO</h1>
      <h1>HELOOOOOOOOOOOOO</h1>
        <button onClick={this.props.displayCat}> Cats </button>
        <button onClick={this.props.displayDog}>Dogs</button>
        <div>
        {this.props.pets_form.is_cat === true || this.props.pets_form.is_cat === null ?
          this.state.cats.map(cat => (
            <div key={cat.id}>
              <p>CATSSS</p>
              <ReactPlayer className="Video" url={cat.video_url}/>
              <p>{cat.title}</p>
            </div>
          ))
          :
          this.state.dogs.map(dog => (
            <div key={dog.id}>
              <h1>DOOOOGS</h1>
              <ReactPlayer url={dog.video_url}/>
              {dog.title}
            </div>
          ))
          }
          </div>
      </div>
    )
  }
}
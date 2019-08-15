import React from 'react'
import { fetchPet } from '../../services/pet';


export default class Categories extends React.Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      dogs: []

    }
  }

  // handlePets = async () => {
  //   const _pets = await fetchPet();
  //   this.setState({
  //     pets: _pets
  //   })
  // }

  // displayCat = async () => {
  //   this.setState({
  //     isCat: true,

  //   })
  // }
  // displayDog = async () => {
  //   this.setState({
  //     isCat: false,
  //   })
  // }


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
        <button onClick={this.props.displayCat}> Cats </button>
        <button onClick={this.props.displayDog}>Dogs</button>
        <div>
        {this.props.pets_form.is_cat ?
          this.state.cats.map(cat => (
            <div key={cat.id}>
              <p>CATSSS</p>
              <p>{cat.video_url}</p>
              <p>{cat.title}</p>
            </div>
          ))
          :
          this.state.dogs.map(dog => (
            <div key={dog.id}>
              <h1>DOOOOGS</h1>
              {dog.video_url}
              {dog.title}
            </div>
          ))
          }
          </div>
      </div>
    )
  }
}
import React from 'react';
import decode from 'jwt-decode';
import { loginUser, verifyUser, createUser } from './services/user'
import { createPet, fetchPet } from './services/pet';
import { createComment } from './services/comment'
import { Route, Link, withRouter } from 'react-router-dom'
import SeeMoreVideos from './components/main/SeeMoreVideos'
import AddPetForm from './components/main/AddPetForm';
import Navigation from './components/header/Navigation'
import Categories from './components/main/Categories'
import Comment from './components/main/Comment'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // -----------LOGIN----
      loginForm: {
        username: '',
        password: '',
      },
      registerForm: {
        username: '',
        email: '',
        password: '',
      },
      currentUser: null,
      loggedIn: null,
      // ----------E N D-----
      // -----------PETS-----
      pets: null,
      pets_form: {
        user_id: '',
        title: '',
        video_url: '',
        is_cat: null,
      },
      currentPet: {
        id: '',
        title: '',
        video_url: '',
        is_cat: '',
      },
      // ---------E N D-----
      // ---------COMMENTS--
      comments: null,
      comments_form: {
        user_id: '',
        pet_id: '',
        post: '',
      }
      // ---------E N D-----

    }
  }

  // ------------------------LOGIN - REGISTER AUTH  -----------------------------
  handleRedirect = async (e) => {
    // e.preventDefault();
    await this.handleLoginSubmit(e)
    this.props.history.push('/')
    // this.props.hideLogin();
  }

  handleLoginChange = (e) => {
    const { target: { name, value } } = e;
    this.setState(prevState => ({
      loginForm: {
        ...prevState.loginForm,
        [name]: value,
      }
    }))
  }

  handleLoginSubmit = async (e) => {
    // e.preventDefault()
    const resp = await loginUser({ username: this.state.loginForm.username, password: this.state.loginForm.password })
    // console.log(resp);
    this.setState({
      currentUser: resp.username,
      user: resp.username,
      loginForm: {
        username: '',
        password: '',
      }
    })
  }

  componentDidMount = async () => {
    const resp = await verifyUser();
    // const checkUser = localStorage.getItem("jwt");
    if (resp) {
      const user = (resp);
      this.setState({
        currentUser: user.username,
        // pet_id: pet.id
      })
    }
    this.handleFetchPets();
  }
  handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }

  //  -------------------------------REGISTER ---------------------------------

  handleRegisterChange = (e) => {
    const { target: { name, value } } = e;
    this.setState(prevState => ({
      registerForm: {
        ...prevState.registerForm,
        [name]: value,
      }
    }))
  }
  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
  }
  handleRegisterSubmit = async (e) => {
    e.preventDefault();
    await createUser(this.state.registerForm);
    this.handleLogin();
    this.setState({
      registerForm: {
        username: '',
        email: '',
        password: '',
      }
    })
  }

  // ------------------------END LOGIN- REGISTER------------------------------


  // ------------------------  ADD PET ---------------------------------------
  handlePetChange = (e) => {
    const { target: { name, value } } = e;
    this.setState(prevState => ({
      pets_form: {
        ...prevState.pets_form,
        [name]: value
      }
    }))
  }

  handlePetSubmit = async (ev) => {
    ev.preventDefault();
    const pet = await createPet(this.state.pets_form)
    this.setState(prevState => {
      const whichPet = pet.is_cat ? "cats" : "dogs"
      return {
        pets: {
          ...prevState.pets,
          [whichPet]: [...prevState.pets[whichPet], pet]
        },
        pets_form: {
          title: '',
          video_url: '',
          is_cat: null,
        },
      }
    });
    console.log(pet)
    this.props.history.push(`/pets`)
  }
  // ------------------------END ADDING A PET---------------------------------

  // ------------------------ PETS DETAILS -----------------------------------

  handleDetail = (id) => {
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        id: id,
      }
    }))
  }

  handleFetchPets = async () => {
    const _pets = await fetchPet();
    console.log(_pets)
    this.setState({
      pets: _pets
    })
    console.log(this.state.pets)
  }


  displayCat = async () => {
    this.setState(prevState => ({
      pets_form: {
        ...prevState.pets_form,
        is_cat: true,
      }
    }))
  }
  displayDog = async () => {
    this.setState(prevState => ({
      pets_form: {
        ...prevState.pets_form,
        is_cat: false,
      }
    }))
  }

  // ------------------------ END PETS DETAILS --------------------------------

  // ------------------------ COMMENTS HERE -----------------------------------

  handleCommentChange = (ev) => {
    const { target: { name, value } } = ev;
    this.setState(prevState => ({
      comments_form: {
        ...prevState.comments_form,
        [name]: value
      }
    }))
  }

  handleCreateComment = async (petId, data) => {
    // ev.preventDefault();
    const comment = await createComment(petId, data);
    // this.setState(prevState => {
    //   return {
    //     comments: [...prevState.comments, comment],
    //     comments_form: {
    //       user_id: '',
    //       pet_id: '',
    //       post: '',
    //     }
    //   }
    // });
  }


  // handleDeleteComment = async (id) => {
  //   const resp = await deleteComment(id);
  //   this.setState(prevState => ({
  //     comments: prevState.comments.filter(dojo => comment.id !== id),
  //   }));
  // }


  fetchComment = async (petId) => {
    const comments = await this.fetchComments(this.props.comment.id, petId);
    this.setState(prevState => ({
      comments: {
        ...prevState.comments,
        [petId]: comments
      }
    }));
  }


  // ------------------------ END COMMENTS ------------------------------------

  render() {
    return (
      <div className="App">
        <header>

          <Navigation
            handleRedirect={this.handleRedirect}
            currentUser={this.state.currentUser}
            loggedIn={this.state.loggedIn}
            handleLogout={this.handleLogout}
            handleLoginChange={this.handleLoginChange}
            handleLoginSubmit={this.handleLoginSubmit}
            loginForm={this.state.loginForm}

            handleRegisterSubmit={this.handleRegisterSubmit}
            handleRegisterChange={this.handleRegisterChange}
            registerForm={this.state.registerForm}
          />
        </header>
        <main>

          <Route exact path="/" render={() =>
            <Categories
              handleFetchPets={this.handleFetchPets}
              displayCat={this.displayCat}
              displayDog={this.displayDog}
              pets={this.state.pets}
              pets_form={this.state.pets_form}
              handleDetail={this.handleDetail}
            />}
          />
          <Route exact path="/pets/:id/comment" render={() =>
            <Comment />} />
          <Route path="/addPet" render={() => (
            <AddPetForm
              pets_form={this.state.pets_form}
              handlePetChange={this.handlePetChange}
              handlePetSubmit={this.handlePetSubmit}
            />
          )} />
          <Route exact path="/seeMore" render={(props) => (
            <SeeMoreVideos
              pets={this.state.pets}
              pets_form={this.state.pets_form}
              handlePetChange={this.handlePetChange}
              handlePetSubmit={this.handlePetSubmit}
              //COMMENTS
              comments_form={this.state.comments_form}
              comments={this.state.comments}
              currentUser={this.state.currentUser}
              handleCreateComment={this.handleCreateComment}
              handleCommentChange={this.handleCommentChange}
              // pet={this.state.pets.find(pet => pet.id === parseInt(props.match.params.id))}
            />
          )} />
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default withRouter(App);

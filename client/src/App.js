import React from 'react';
import decode from 'jwt-decode';
import { loginUser, verifyUser, createUser } from './services/user'
import { createPet, fetchPet } from './services/pet';
import { Route, Link, withRouter } from 'react-router-dom'
import AddPetForm from './components/main/AddPetForm';
import Navigation from './components/header/Navigation'
import Categories from './components/main/Categories'
import Comment from './components/main/Comment'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // ----LOGIN-----
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
      // ----E N D-----
      // ----PETS-----
      pets: [],
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
      }
      // ----E N D-----
    }
  }
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
        currentUser: user.username
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


  // ------------------------ADD PET -----------------------------------------
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
    this.setState(prevState => ({
      pets: [...prevState.pets, pet],
      pets_form: {
        title: '',
        video_url: '',
        is_cat: null,
      },
    }));
    console.log(pet)
    this.props.history.push(`/pets`)
  }
  // ------------------------END ADDING A PET---------------------------------

  // ------------------------ CURRENT PET DETAILS-----------------------------

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
  // ------------------------END CURRENT PET DETAILS-------------------------

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

  // ------------------------END ADD A PET FORM -----------------------------

  render() {
    return (
      <div className="App">
        <header>


          {/* <AddPetForm /> */}
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
          
            <Categories
              handleFetchPets={this.handleFetchPets}
              displayCat={this.displayCat}
              displayDog={this.displayDog}
              pets={this.state.pets}
              pets_form={this.state.pets_form}
              handleDetail={this.handleDetail}
            />
          <Route exact path="/pets/:id/comment" render={() =>
            <Comment />} />
          <Route exact path="/addPet" render={() => (
            <AddPetForm
              pets_form={this.state.pets_form}
              handlePetChange={this.handlePetChange}
              handlePetSubmit={this.handlePetSubmit}
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

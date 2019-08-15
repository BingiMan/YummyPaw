import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom'
import Navigation from './components/header/Navigation'
import Categories from './components/main/Categories'
import Comment from './components/main/Comment'
import { loginUser, verifyUser, createUser } from './services/user'
import decode from 'jwt-decode';
import './App.css';
import { createPet } from './services/pet';

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
        user_id:'',
        title: '',
        video_url: '',
        is_cat: null,
      },
      currentPet: {
        id: '',
        title: '',
        video_url: '',
        is_cat:'',
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
  }
  handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }

  //  ----------- REGISTER -------------

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

  // ------------------------END LOGIN- REGISTER-------------------------
  handlePetChange = (e) => {
    const { target: { name, value } } = e;
    this.setState(prevState => ({
      pets_form: {
        ...prevState.pets_form,
        [name] : value
      }
    }))
  }

  handlePetSubmit = async (ev) => {
    ev.preventDefault();
    const pets = await createPet(this.state.pets_form)
    this.setState(prevState => ({
      pets_form: [...prevState.pets_form, pets],
      pets_form: {
        title: '',
        video_url: '',
        is_cat: null,
      },
    }));
    this.props.history.push(`/pets`)
  }
  // ------------------------END ADDING A PET-------------------------

  handleDetail = (id) => {
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        id:id,
      }
    }))
  }

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
          <Route exact path="/pets/:id" render={() =>
            <Categories
              pets_form={this.state.pets}
              handlePetSubmit={this.handlePetSubmit}
              handlePetChange={this.handlePetChange}
              handleDetail={this.handleDetail}
            />} />
          <Route exact path="/pets/:id/comment" render={() =>
            <Comment
            
            />} />
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default withRouter(App);

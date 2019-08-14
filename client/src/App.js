import React from 'react';
import { withRouter } from 'react-router'
import Navigation from './components/header/Navigation'
import { loginUser, verifyUser, createUser } from './services/user'
import decode from 'jwt-decode';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  // console.log(this.state.registerForm)
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
      </div>
    );
  }
}

export default withRouter(App);

import React from 'react'
import Login from './Login'
import Register from './Register'



export default class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {
      showLogin: false,
      showRegister: false,
    }
  }
  showRegister = () => {
    this.setState({
      showRegister: true,
      showLogin: false
    })
  };
  hideRegister = () => {
    this.setState({
      showRegister: false
    })
  };
  showLogin = () => {
    this.setState(
      {
        showLogin: true,
        showRegister: false
      }
    )
  };
  hideLogin = () => {
    this.setState(
      {
        showLogin: false
      }
      )
  };
  
  


  render() {
    const loggedIn = localStorage.getItem('authToken');
    return (
      <div>
        {/* <Link to="/pets"> Categories </Link> */}
        <div className="nav-wrapper">
          <div className="nav-opts">
            {!loggedIn &&
              (<div className="nav-wrapper-right">
                <button className="btn btn1" onClick={this.showLogin}> Login</button>
                <button className="btn btn2" onClick={this.showRegister}> Register</button>
              </div>)}
            {loggedIn &&
           <div className="display-username"> Paw's up, {this.props.currentUser}  </div>
           }
            {loggedIn &&
              <button className="btn3" id="logout" onClick={this.props.handleLogout}>Log Out</button>
            }
          </div>
        </div>
        {this.state.showLogin ? <Login
          hideLogin={this.hideLogin}
          handleRedirect={this.props.handleRedirect}
          currentUser={this.props.currentUser}
          loggedIn={this.props.loggedIn}
          handleLogout={this.props.handleLogout}
          handleLoginChange={this.props.handleLoginChange}
          handleLoginSubmit={this.props.handleLoginSubmit}
          loginForm={this.props.loginForm} 
        /> : ''}
        {this.state.showRegister ? <Register
          hideRegister={this.hideRegister}
          showLogin={this.showLogin}
          handleRegisterSubmit={this.props.handleRegisterSubmit}
          handleRegisterChange={this.props.handleRegisterChange}
          registerForm={this.props.registerForm}
        /> : ''}
      </div>
    )
  }
}
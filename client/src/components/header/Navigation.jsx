import React from 'react'
import Login from './Login'
import Register from './Register'
import Hamburger from "./Hamburger";



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
          <Hamburger/>
          <div className="nav-opts">
            {!loggedIn &&
              (<div className="nav-wrapper-right">
                <button className="logos login-logo" onClick={this.showLogin}/>
                <button className="logos register-logo" onClick={this.showRegister}/>
              </div>)}
            {loggedIn &&
              <div className="display-username"> Paw's up, {this.props.currentUser.name}  </div>
            }
            {loggedIn &&
              <button className="logos logout-logo" id="logout" onClick={this.props.handleLogout}/>
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
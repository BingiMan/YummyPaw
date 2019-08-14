import React from 'react'
import { withRouter } from 'react-router-dom'
import { createUser, loginUser } from '../../services/user';



class Register extends React.Component {
  constructor() {
    super()
    
  }

  
  handleRedirect = async (e) => {
    e.preventDefault()
    await this.props.handleRegisterSubmit(e);
    await this.props.showLogin(e);
    // this.props.history.push('/')
  }

  handleClose = (e) => {
    e.preventDefault();
    this.props.hideRegister();
  }


  render() {
    return (
      <div className="register-dialog">
        <div className="close-thik" onClick={this.handleClose} ></div>
        <form className="register-form">
          <div className="flex">
            <h1 className="form-title">Register</h1>
          </div>
          <input className="modern-input-text" onChange={this.props.handleRegisterChange} type="text" name="username" value={this.props.registerForm.username} placeholder="Username" />
          <input className="modern-input-text" onChange={this.props.handleRegisterChange} type="email" name="email" value={this.props.registerForm.email} placeholder="Email" />
          <input className="modern-input-text" onChange={this.props.handleRegisterChange} type="password" name="password" value={this.props.registerForm.password} placeholder="Password" />
          <div className="flex">
            <button className="btn form-btn" onClick={this.handleRedirect}>Register</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Register);
import React from 'react'
import { createUser, loginUser } from '../../services/user';
import decode from 'jwt-decode';


export default class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      registerForm: {
        username: '',
        email: '',
        password: '',
      }
    }
  }

  handleChange = (e) => {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(this.state.registerForm);
    this.handleLogin();
    // this.setState({
    //   registerForm: {
    //     username: '',
    //     email: '',
    //     password: '',
    //   }
    // })
    // console.log(this.state.registerForm)
  }
  handleRedirect = async (e) => {
    e.preventDefault()
    await this.handleSubmit(e);
    // await this.props.showLogin(e);
    // this.props.history.push('/')
  }

  handleClose = (e) => {
    e.preventDefault();
    // this.props.hideRegister();
  }


  render() {
    return (
      <div>
        <div className="close-thik" onClick={this.handleClose} ></div>
        <form className="register-form">
          <div className="flex">
            <h1 className="form-title">Register</h1>
          </div>
          <input className="modern-input-text" onChange={this.handleChange} type="text" name="username" value={this.state.registerForm.name} placeholder="Username" />
          <input className="modern-input-text" onChange={this.handleChange} type="email" name="email" value={this.state.registerForm.email} placeholder="Email" />
          <input className="modern-input-text" onChange={this.handleChange} type="password" name="password" value={this.state.registerForm.password} placeholder="Password" />
          <div className="flex">
            <button className="btn form-btn" onClick={this.handleSubmit}>Register</button>
          </div>
        </form>
      </div>
    )
  }
}
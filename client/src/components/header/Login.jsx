import React from 'react'
import './headerStyle.css'
import { withRouter } from 'react-router'

class Login extends React.Component {
  constructor() {
    super()
    
  }
  handleClose = (e) => {
    e.preventDefault();
    this.props.hideLogin();
    this.props.handleRedirect();
  }
  
  render() {
    return (
      <div className="login-dialog">
        <div className="close-thik" onClick={this.handleClose}></div>
          <form className="login-form">
            <div className="flex">
              <h1 className="form-title">
                Login
              </h1>
            </div>
            <input className="modern-input-text" onChange={this.props.handleLoginChange} type="text" name="username" value={this.props.loginForm.username} placeholder="Username" />
            <input className="modern-input-text" onChange={this.props.handleLoginChange} type="password" name="password" value={this.props.loginForm.password} placeholder="Password" />
            <div className="flex">
            <button className="btn form-btn" onClick={this.handleClose}>Login</button>
            </div>
          </form>
        </div>
    )
  }
}

export default withRouter(Login);








// this.state = {
    //   loginForm: {
    //     username: '',
    //     password: '',
    //   },
    //   currentUser: null,
    //   loggedIn: null,
    // }




// handleRedirect = async (e) => {
  //   e.preventDefault();
  //   await this.props.handleSubmit(e)
  //   this.props.history.push('/')
  //   // this.props.hideLogin();
  // }

  // handleChange = (e) => {
  //   const { target: { name, value } } = e;
  //   this.setState(prevState => ({
  //     loginForm: {
  //       ...prevState.loginForm,
  //       [name]: value,
  //     }
  //   })) 
  // }

  // handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const resp = await loginUser(this.state.loginForm.username, this.state.loginForm.password)
  //   this.setState({
  //     currentUser: resp.data.user.username,
  //     user: resp.data.user.id,
  //     loginForm: {
  //       username: '',
  //       password: '',
  //     }
  //   })
  // }
  
  // componentDidMount = async()=> {
  //   const user = await verifyUser();
  //   const checkUser = localStorage.getItem("jwt");
  //   if (user) {
  //     const user = decode(user);
  //     this.setState({
  //       currentUser: user
  //     })
  //   }
  // }
  
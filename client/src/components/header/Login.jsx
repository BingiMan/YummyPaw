import React from 'react'
import { withRouter } from 'react-router'
import decode from 'jwt-decode';
import {loginUser, verifyUser} from '../../services/user'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      loginForm: {
        username: '',
        password: '',
      },
      currentUser: null,
      loggedIn: null,
    }
  }
  handleRedirect = async (e) => {
    e.preventDefault();
    await this.handleSubmit(e)
    this.props.history.push('/')
    // this.props.hideLogin();
  }
  handleClose = (e)=>{
    e.preventDefault();
    this.props.hideLogin();
  }

  handleChange = (e) => {
    const { target: { name, value } } = e;
    this.setState(prevState => ({
      loginForm: {
        ...prevState.loginForm,
        [name]: value,
      }
    })) 
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await loginUser(this.state.loginForm.username, this.state.loginForm.password)
    this.setState({
      currentUser: resp.data.user.username,
      user: resp.data.user.id,
      loginForm: {
        username: '',
        password: '',
      }
    })
  }
  
  componentDidMount = async()=> {
    const user = await verifyUser();
    const checkUser = localStorage.getItem("jwt");
    if (user) {
      const user = decode(user);
      this.setState({
        currentUser: user
      })
    }
  }



  render() {
    return (
      <div>
        <div>
          <form>
            <div>
              <h1>Login</h1>
            </div>
            <input onChange={this.handleChange} type="text" name="username" value={this.state.loginForm.username} placeholder="Username" />
            <input onChange={this.handleChange} type="password" name="password" value={this.state.loginForm.password} placeholder="Password" />
            <div>
            <button onClick={this.handleRedirect}>Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
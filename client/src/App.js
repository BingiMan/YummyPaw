import React from 'react';
import Register from './components/header/Register'
import Login from './components/header/Login'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
  }




  
  render() {
    return (
      <div className="App">
        <Login/>
        <Register/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from 'react-google-login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. 
          <GoogleLogin
        clientId="401469086263-0edqhedsh791l80lnunqhosv7jsj477m.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess = { (responseGoogle) => console.log("success",responseGoogle) }
        onFailure = { (responseGoogle) => console.log("error",responseGoogle) }
      />
          
        </p>
      </div>
    );
  }
}

export default App;

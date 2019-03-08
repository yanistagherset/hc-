import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
  console.log(response.w3.ig);
  
}

class App extends Component {
  render() {
    return (
      <div className="App">
         <GoogleLogin
    clientId="137338565014-utv0otr9p3638kijur0b2n8c9sqa2cpc.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
      </div>
    );
  
  }
}

export default App;

import React from 'react';
import "./LoginPage.css"
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/users/me').then(user => {
      if (user.status === 200) {
        console.log(user);
        window.location = '/home';
      }
    });
  }

  onInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onLoginClick = e => {
    e.preventDefault();
    const { email, password } = this.state;
    fetch('http://localhost:4000/api/sessions', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(res => {
      if (res.status === 204) {
        window.location = '/home';
      }
    });
  }

  onSignupClick = e => {
    e.preventDefault();
    const { email, password } = this.state;
    fetch('http://localhost:4000/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }

  render() {
    return (
      <div className="Login">
        <p className="spanStyle">Movie Rating </p>
        <form className="formStyle">
          <input className="InputStyle" placeholder="email" name="email" required type="email" onInput={this.onInput} value={this.state.email}></input>
          <input className="InputStyle" placeholder="password" name="password" required type="password" onInput={this.onInput} value={this.state.password}></input>
          <div className="buttonDiv">
            <input className="inputButton" type="submit" onClick={this.onLoginClick} value="Login"></input>
            <input className="inputButton" type="submit" onClick={this.onSignupClick} value="Sign up"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;

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
    fetch('/api/users/me').then(user => {
      if (user.status === 200) {
        console.log(user);
        window.location = '/';
      }
    });
  }

  onInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onLoginClick = e => {
    e.preventDefault();
    const { email, password } = this.state;
    fetch('/api/sessions', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(res => {
      if (res.status === 204) {
        window.location = '/';
      }
    });
  }

  onSignupClick = e => {
    e.preventDefault();
    const { email, password } = this.state;
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(()=>{
      window.location = "/login";
    });
  }

  render() {
    return (
      <div className="LoginMain">
        <p className="spanStyle">Movie Rating </p>
        <form className="formStyle">
          <input className="InputStyle" placeholder="Email" name="email" required type="email" onInput={this.onInput} value={this.state.email}></input>
          <input className="InputStyle" placeholder="Password" name="password" required type="password" onInput={this.onInput} value={this.state.password}></input>
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
import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      fetch('/api/users/me').then(user => {
        if (user.status !== 200) {
          window.location = '/';
        }
        return user.json();
      })
      .then(user => {
          this.setState({ ...user });
      });
  }

  
  render() {
    return (<div className="Profile">
        <div>UserName: {this.state.email}</div>
      </div>);
  }
}

export default Profile;

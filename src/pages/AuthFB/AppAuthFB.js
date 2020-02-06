import React, { Component } from 'react';
import Facebook from '../../components/AuthFB/Facebook';


class AppAuth extends Component {
  render() {
    return (
      <div>
        <h1>Facebook Auth Exemple</h1>
        <p>To get started, authenticate with Facebook.</p>
        <Facebook />
      </div>
    );
  }
}

export default AppAuth;
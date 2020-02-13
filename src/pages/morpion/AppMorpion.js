import React, { Component } from 'react';
import './AppMorpion.scss'
import Game from '../../components/morpion/Game';

class AppMorpion extends Component {
  render() {
    return (
      <div className="app-morpion">
        <h1>Morpion 2.0</h1>
        <Game />
      </div>
    );
  }
}

export default AppMorpion;

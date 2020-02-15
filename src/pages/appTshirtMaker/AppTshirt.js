import React, { Component } from 'react';
import Dashboard from '../../components/appTshirtMaker/components/dashboard/Dashboard';
import './AppTshirt.scss'

class AppTshirtMaker extends Component {
  render() {
    return (
      <div className="tshirt-app">
        <Dashboard />
      </div>
    );
  }
}

export default AppTshirtMaker;
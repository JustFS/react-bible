import React, { Component } from 'react';
import Dashboard from '../../components/appTshirtMaker/components/dashboard/Dashboard';
import Navbar from '../../components/appTshirtMaker/components/navbar/Navbar';
import Project from '../../components/appTshirtMaker/components/project/Project';

import './App.css'

class AppTshirtMaker extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Dashboard />
        <Project />
      </>
    );
  }
}

export default AppTshirtMaker;
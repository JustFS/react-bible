import React, { Component } from 'react';
import Navbar from '../../components/appTourTravel/components/Navbar/Navbar'
import TourList from '../../components/appTourTravel/components/TourList'


class AppTour extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TourList />
      </div>
    );
  }
}

export default AppTour;
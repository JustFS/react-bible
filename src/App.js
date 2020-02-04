import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import Clock from './components/Horloge'
import Subscribe from './components/multistep-form/Subscribe';
import Recipe from './components/recipeAPI/Recipe';
import AppTour from './pages/appTourTravel/AppTour';
import AppBC from './pages/budgetCalculator/AppBC';
import AppMD from './pages/markdown/AppMD';
import AppYL from './pages/youtubeLike/AppYL';
import AppWeather from './pages/weather/AppWeather';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/horloge" component={Clock} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/subscribe" component={Subscribe} />
        <Route path="/app-tour" component={AppTour} />
        <Route path="/budget-calculator" component={AppBC} />
        <Route path="/markdown" component={AppMD} />
        <Route path="/youtube-like" component={AppYL} />
        <Route path="/weather-app" component={AppWeather} />

      </Router>
    </>
  );
}

export default App;

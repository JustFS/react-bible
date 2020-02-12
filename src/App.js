import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Subscribe from './components/multistep-form/Subscribe';
import Recipe from './components/recipeAPI/Recipe';
import AppTour from './pages/appTourTravel/AppTour';
import AppBC from './pages/budgetCalculator/AppBC';
import AppMD from './pages/markdown/AppMD';
import AppYL from './pages/youtubeLike/AppYL';
import AppPictures from './pages/appPictures/AppPictures';
import AppAuth from './pages/AuthFB/AppAuthFB';

import Home from './pages/home/Home';
import Sidebar from './components/Sidebar';
import AppMorpion from './pages/morpion/AppMorpion';
import AppTshirtMaker from './pages/appTshirtMaker/AppTshirt';
import { RootChat } from './pages/contact/ChatApp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Route path="/" exact component={Home} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/subscribe" component={Subscribe} />
        <Route path="/app-tour" component={AppTour} />
        <Route path="/budget-calculator" component={AppBC} />
        <Route path="/markdown" component={AppMD} />
        <Route path="/youtube-like" component={AppYL} />
        <Route path="/app-pictures" component={AppPictures} />
        <Route path="/auth" component={AppAuth} />
        <Route path="/contact" component={RootChat} />
        <Route path="/morpion" component={AppMorpion} />
        <Route path="/tshirt-maker" component={AppTshirtMaker} />

      </Router>
    </>
  );
}

export default App;

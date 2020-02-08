import React from 'react';
import './Home.scss';
import AppTodoList from '../../components/toDoList/AppTodoList';
import Clock from '../../components/home/Horloge';
import AppWeather from '../weather/AppWeather';
import Footer from '../../components/home/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-title">
        <h1>This is <span style={{color: '#61DAFB'}}>react</span></h1>
      </div>
      <div className="weather-app">
        <AppWeather />
      </div>
      <div className="clock">
        <Clock />
      </div>
      <div className="app-todo">
        <AppTodoList />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
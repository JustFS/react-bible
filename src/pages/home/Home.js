import React from 'react';
import './Home.scss';
import AppTodoList from '../../components/toDoList/AppTodoList';
import Clock from '../../components/Horloge';
import AppWeather from '../weather/AppWeather';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-title">This is <span style={{color: '#61DAFB'}}>react</span></h1>
      <div className="weather-app">
        <AppWeather />
      </div>
      <div className="clock">
        <Clock className="clock" />
      </div>
      <div className="app-todo">
        <AppTodoList className="app-todo" />
      </div>
      <div className="app-footer">
        <Footer className="app-footer" />
      </div>
    </div>
  );
};

export default Home;
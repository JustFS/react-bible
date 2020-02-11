import React from 'react';
import './AppWeather.scss';

import 'weather-icons/css/weather-icons.css';
import Weather from '../../components/weatherApp/Weather';
import Form from '../../components/weatherApp/Form';

import basic from './images/basic.jpeg'
import thunder from './images/thunder.png'
import drizzle from './images/drizzle.jfif'
import rain from './images/rain.jfif'
import snow from './images/snow.jpeg'
import atmosphere from './images/atmosphere.jfif'
import sunny from './images/sunny.jpg'
import clouds from './images/cloud.jpeg'

// api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key = '785b483d0b0e54e479a7c95142e1c7f2';


class AppWeather extends React.Component {
  constructor() {
    super();
      this.state = { 
        city: undefined,
        country: undefined,
        icon: undefined,
        main: undefined,
        celsius: undefined,
        temp_max: undefined,
        temp_min: undefined,
        description: '',
        error:false,
        backgroundChange: `url(${basic})`
      }

      this.weatherIcon = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
      };
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  get_WeatherIcon(icons, rangeId) {
    switch(true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm,
                        backgroundChange: `url(${thunder})`});

        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle,
                        backgroundChange: `url(${drizzle})`});
        break;
      case rangeId >= 500 && rangeId <= 532:
        this.setState({ icon: this.weatherIcon.Rain,
                        backgroundChange: `url(${rain})`});
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.Snow,
                        backgroundChange: `url(${snow})`});

        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere,
                        backgroundChange: `url(${atmosphere})`});
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear,
                        backgroundChange: `url(${sunny})`});
  
        break;  
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds,
                        backgroundChange: `url(${clouds})`});

        break;    
      default:
        this.setState({ icon: this.weatherIcon.Clouds});

    }
  } 

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
      );
      const response = await api_call.json();
        

    this.setState({
      city:`${response.name}, ${response.sys.country}`,
      celsius:this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description,
      error:false
    });

    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
      } else {
        this.setState({error: true});
  }
    
  };

  render() {

    return (
      <div className="weather-background" style={{backgroundImage: this.state.backgroundChange}}>
        <div className="weather-body">
          <Form loadweather={this.getWeather} error={this.state.error} />
          <Weather 
            city={this.state.city} 
            country={this.state.country} 
            temp_celsius={this.state.celsius}
            temp_max={this.state.temp_max}
            temp_min={this.state.temp_min}
            description={this.state.description}
            weatherIcon={this.state.icon}
          />
        </div>
      </div>
    );
  }
}

export default AppWeather;

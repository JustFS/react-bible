import React from 'react';

const Weather = (props) => {
  return (
    <div className="weather-container">
      <div className="cards ">
        <h2>
          {props.city}
        </h2>
        <h5 className="">
          <i className={`wi ${props.weatherIcon} display-1`}></i>
        </h5>

        { props.temp_celsius ? (<h3 className="">{props.temp_celsius}&deg;</h3>) : null}

        {/* { show max and min temp} */}
        {minmaxTemp(props.temp_min,props.temp_max)}

        <h4 className="">{props.description}</h4>
      </div>
    </div>
  );
};

function minmaxTemp(min,max) {
  if (min && max) {
    return (
      <h4>
        <span className="weather-min">min : {min}&deg; / </span>
        <span className="weather-max"> max : {max}&deg;</span>
      </h4>
    );
  }
}

export default Weather;
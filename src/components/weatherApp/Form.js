import React from 'react';

const Form = (props) => {
  return (
    <div className="weather-container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="">
            <input 
              type="text" 
              className="form-control" 
              name="city" 
              autoComplete="off"
              placeholder="City"
            />
          </div>
          <div className="">
            <input 
              type="text" 
              className="form-control" 
              name="country" 
              autoComplete="off" 
              placeholder="Country"
          />
          </div>
          <div className="">
            <button className="weather-btn">Get weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return(
    <div className="weather-alert" role="alert">
      Please Enter City and Country
    </div>
  )
}

export default Form;
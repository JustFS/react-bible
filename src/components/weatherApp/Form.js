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
            <button className="btn btn-warning">Get weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return(
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country
    </div>
  )
}

export default Form;
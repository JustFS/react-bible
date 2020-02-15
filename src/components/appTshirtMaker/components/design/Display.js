import React from 'react';

const Display = ({ display, textFormat }) => {
  

  return (
    <div className="card card-content">
      <div className="imgTshirt text-center">
        <img 
          src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtColor}`} 
          alt="img-tshirt"
          className="img-responsive"
        />
      </div>
      <div className="memeText text-center">
        <div className="upperText">
          <p style={{fontSize: textFormat, color:display.textColor}}>{display.upperText}</p>
        </div>
        <img 
          src={`${display.url}` || "http://via.placeholder.com/400x300"}
          alt="meme-text"
          height="300"
        />
        <div className="lowerText">
          <p style={{fontSize: textFormat, color:display.textColor}}>{display.lowerText}</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
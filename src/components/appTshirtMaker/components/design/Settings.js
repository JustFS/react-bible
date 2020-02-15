import React from 'react';

const urlImgBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/'




const Settings = ({ color, upperText, lowerText, uploadImage, textSize, textColor }) => {
  return (
    <div className="card bg-light container">
      <h3 className="text-center">Settings</h3>
      <h4>Change T-Shirt Color</h4>
      <div className="tshirt-color">
        <img onClick={color} src={`${urlImgBase}white`} alt="white-tshirt" id="white" />
        <img onClick={color} src={`${urlImgBase}black`} alt="black-tshirt" id="black"/>
        <img onClick={color} src={`${urlImgBase}grey`} alt="grey-tshirt" id="grey"/>
        <img onClick={color} src={`${urlImgBase}blue`} alt="blue-tshirt" id="blue"/>
        <img onClick={color} src={`${urlImgBase}red`} alt="red-tshirt" id="red"/>
      </div>
      <hr />
      <h4>Write text</h4>
      <input onChange={upperText} type="text" className="form-control form-control-sm mb-2" placeholder="Upper Text" />
      <input onChange={lowerText} type="text" className="form-control form-control-sm" placeholder="Lower Text" />

      <h4>Upload Image</h4>
      <div className="form-group">
        <input onChange={uploadImage} type="file" />
      </div>

      <h4>Text Size</h4>
      <input onChange={textSize} type="range" min="16" max="26" />
      <hr/>

      <h4>Text Color</h4>
      <select onChange={textColor} name="" id="" className="form-control form-control-sm mb-2">
        <option>White</option>
        <option>Black</option>
        <option>Red</option>
        <option>Blue</option>
      </select>
      <button className="btn btn-primary btn-sm mb-2">Save</button>
    </div>
  );
};


export default Settings;
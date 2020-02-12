import React from 'react';

const imgBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/'

const ProjectList = ({ design }) => {
  return (
    <div className="item text-center">
      <div className="card card-body">
        <img src={`${imgBase}${design.tshirtColor}`} alt="t-shirt" className="img-fluid" />
        <p>{design.name}</p>
        <button className="btn btn-primary btn-sm">View Project</button>
      </div>
    </div>
  );
};

export default ProjectList;
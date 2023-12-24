import React from "react";
import "./Course.css";

function Course({ title, description, image }) {
  return (
    <div className="cardWrapper">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;

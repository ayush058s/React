import React from "react";
import { Star, Mail } from "lucide-react";

const Card = (prop) => {
  return (
    <div className="card">
      <img src={prop.image} alt={prop.name} />

      <h3 className="heading">{prop.name}</h3>
      <p className="descrip">{prop.description}</p>

      <div className="bottom">
        <div className="details">
          <span>
            <div className="star">
              <span className="mainstar"><Star size={14} /></span>
              {prop.rating}
            </div>
            Rating
          </span>

          <span>
            <div>{prop.earned}</div>
            Earned
          </span>

          <span>
            <div>{prop.rate}</div>
            Rate
          </span>
        </div>

        <button className="btn">
          <Mail size={16} /> Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Card;
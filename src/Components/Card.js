import React from 'react';
import './Card.css'; // CSS

const Card = ({ id, name, email }) => {
  return (
  <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${ id }?200x200`} alt="robots" />
      <div>
          <h2 className="f4">{ name }</h2>
          <p className="f5">{ email }</p>
      </div>
  </div>

  );
}

// Export the component so that it can be used elsewhere
export default Card;

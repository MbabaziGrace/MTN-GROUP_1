import React from 'react';
const Card = ({ title, subtitle1, subtitle2, link1, link2 }) => {
  return (
   <>
    <div class="card-container">
        <div className="card">
            <div className="card-header">
              <h2>{title}</h2>
            </div>
            <div className="card-body">
              <a href={link1}>{subtitle1}</a>
              <a href={link2}>{subtitle2}</a>
              <a href="/" id='view-more'>View More Topics</a>
            </div>
          </div>
    </div>
   </>
    
  );
};

export default Card;

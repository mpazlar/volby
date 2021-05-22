import React from 'react';
import './style.css';

const Candidate = ({ name, avatar, elect }) => {
  const handleClick = () => {
    elect(name);
  };

  return (
    <div className="candidate">
      <h3 className="candidate__name">{name}</h3>
      <img className="candidate__avatar" src={avatar} />
      <button onClick={handleClick} className="btn-vote">
        Vybrat
      </button>
    </div>
  );
};

export default Candidate;

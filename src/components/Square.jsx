import React from 'react';

const Square = ({ position, children, handleClick }) => {
  return (
    <button className="square" onClick={() => handleClick(position)}>
      {children}
    </button>
  );
};

export default Square;

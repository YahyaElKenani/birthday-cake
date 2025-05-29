import React from 'react';
import './Candle.css'; // We'll create this CSS file next

const Candle = ({ isLit, onClick }) => {
  return (
    <div className="candle" onClick={onClick} role="button" tabIndex={0} aria-pressed={!isLit} aria-label="Blow out candle">
      {isLit && <div className="flame"></div>}
      <div className="wick"></div>
      <div className="wax"></div>
    </div>
  );
};

export default Candle;
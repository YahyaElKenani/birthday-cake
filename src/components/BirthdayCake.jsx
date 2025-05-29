import React, { useState, useEffect } from 'react';
import Candle from './Candle';
import './BirthdayCake.css'; // We'll create this CSS file next

const BirthdayCake = ({ numberOfCandles, onAllCandlesOut }) => {
  const initialCandlesState = Array(numberOfCandles).fill(null).map((_, index) => ({
    id: index,
    isLit: true,
  }));

  const [candles, setCandles] = useState(initialCandlesState);

  const handleBlowOutCandle = (id) => {
    setCandles((prevCandles) =>
      prevCandles.map((candle) =>
        candle.id === id ? { ...candle, isLit: false } : candle
      )
    );
  };

  useEffect(() => {
    const allOut = candles.every(candle => !candle.isLit);
    if (allOut) {
      onAllCandlesOut();
    }
  }, [candles, onAllCandlesOut]);

  return (
    <div className="cake-container">
      <div className="cake">
        <div className="frosting"></div>
        <div className="layer layer-top"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-bottom"></div>
        <div className="candles-container">
          {candles.map((candle) => (
            <Candle
              key={candle.id}
              isLit={candle.isLit}
              onClick={() => handleBlowOutCandle(candle.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayCake;
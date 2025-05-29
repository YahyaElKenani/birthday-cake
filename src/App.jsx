import { useState } from 'react';
import './App.css';
import BirthdayCake from './components/BirthdayCake';

function App() {
  const [allCandlesOut, setAllCandlesOut] = useState(false);

  const handleAllCandlesOut = () => {
    setAllCandlesOut(true);
  };

  return (
    <div className="birthday-app">
      <header className="birthday-header">
        <h1 className='birthday-text'>Happy Birthday Nada 🥳!</h1>
        {allCandlesOut && (
          <p className="wish-message">Make a wish! ✨</p>
        )}
      </header>
      <main>
        <BirthdayCake
          numberOfCandles={5} // You can change the number of candles
          onAllCandlesOut={handleAllCandlesOut}
        />
      </main>
      <footer className="birthday-footer">
        <p>Wishing you a fantastic day!</p>
      </footer>
    </div>
  );
}

export default App;

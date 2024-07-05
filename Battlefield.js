import React from 'react';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="left">
          <a href="/">
            <img src="https://www.battlefield.com/battlefield-1/media/battlefield-1-logo.svg" alt="Battlefield 1 Logo" />
          </a>
        </div>
        <div className="right">
          <button className="button">PREMIUM PASS</button>
          <button className="button">+</button>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div className="section">
            <h1>Welcome cookie.</h1>
          </div>
          <div className="section">
            <div className="grid">
              <div className="card">
                <img src="https://www.battlefield.com/battlefield-1/media/battlefield-1-logo.svg" alt="Battlefield 1 Logo" />
                <h2>ALL MODES</h2>
                <h3>ALL MAPS</h3>
                <p>73 RESULTS</p>
              </div>
              <div className="card">
                <img src="https://www.battlefield.com/battlefield-1/media/battlefield-1-logo.svg" alt="Battlefield 1 Logo" />
                <h2>CONQUEST</h2>
                <h3>ALL MAPS</h3>
                <p>100+ RESULTS</p>
              </div>
              <div className="card">
                <img src="https://www.battlefield.com/battlefield-1/media/battlefield-1-logo.svg" alt="Battlefield 1 Logo" />
                <h2>CHECK OUT THE</h2>
                <h3>NEW FIRESTORM</h3>
                <h3>TRAILER</h3>
              </div>
              <div className="card">
                <img src="https://www.battlefield.com/battlefield-1/media/battlefield-1-logo.svg" alt="Battlefield 1 Logo" />
                <h2>See This Month's</h2>
                <h3>Winners</h3>
              </div>
              <div className="card">
                <img src="https://www.battlefield.com/battlefield-1/media/battlefield-1-logo.svg" alt="Battlefield 1 Logo" />
                <h2>CONTI</h2>
                <h3>CAMP</h3>
                <h3>LEFT</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
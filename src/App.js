import React from 'react';
import './App.css';
import HolidayPackageCard from './HolidayPackageCard'; // Import the component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Holiday Packages</h1>
        <HolidayPackageCard /> {/* Render the card component */}
      </header>
    </div>
  );
}

export default App;

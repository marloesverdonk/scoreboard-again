import React from 'react';
import './App.css';
import Title from './components/Title'
import Scoreboard from './components/Scoreboard'


function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <Title content='Scoreboard'/>
      </header>
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;

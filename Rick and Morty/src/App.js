import React from 'react';
import CharacterList from './components/CharacterList';
import './components/CharacterList.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Rick & Morty page</h2>
      </header>
      <main>
        <CharacterList />
      </main>
    </div>
  );
}

export default App;

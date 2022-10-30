import React from 'react';
import './App.css';
import MainBodyContainer from './container/MainBodyContainer';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <MainBodyContainer />
    </div>
  );
}

export default App;

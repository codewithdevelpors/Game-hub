import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Card from './Components/Card/Card.js';

function App() {
  return (
    <>
    <Header />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Card
        image="https://via.placeholder.com/300x400"
        name="Sample Game"
        details="This is a sample game description. It includes details about the game."
        downloadLink="https://example.com/download"
      />
    </div>
    </>
  );
}

export default App;

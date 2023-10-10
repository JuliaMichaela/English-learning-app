import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import WordCardMap from './components/WordCardMap/WordCardMap'
import './style/App.css';

import words from './assets/data.json';

function App() {
  return (
    <div className="App">
    <Header/>
    <Table/>
    <WordCardMap
      words={words}
      position={0}/>
    <Footer/>
    </div>
  );
}

export default App;

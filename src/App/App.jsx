import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import wordsServ from '../data/words.json';
import Header from '../components/Header/Header';
import HomePage from '../pages/HomePage/HomePage';
import GamePage from '../pages/GamePage/GamePage';
import TablePage from '../pages/TablePage/TablePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Footer from '../components/Footer/Footer';
import './App.scss'


function App() {
  const [words, setWords] = useState(wordsServ);
  const upd = { words, setWords }

  return (
    <div className='app'>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/game' element={<GamePage upd={upd} />} />
          <Route path='/table' element={<TablePage upd={upd} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App

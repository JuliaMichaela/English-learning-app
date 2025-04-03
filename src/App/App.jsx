import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import WordList from '../components/WordList/WordList'
import Table from '../components/Table/Table'
import wordsServ from '../data/words.json'
import './App.scss'
import { useState } from 'react'

function App() {
  const [words, setWords] = useState(wordsServ);
  const upd = { words, setWords }

  return (
    <>
      <Header />
      <Table upd={upd} />
      <WordList upd={upd} />
      <Footer />
    </>
  )
}

export default App

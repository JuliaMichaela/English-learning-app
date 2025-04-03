import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import WordList from '../components/WordList/WordList'
import Table from '../components/Table/Table'
import words from '../data/words.json'
import './App.scss'

function App() {

  return (
    <>
      <Header />
      <Table words={words} />
      <WordList words={words} />
      <Footer />
    </>
  )
}

export default App

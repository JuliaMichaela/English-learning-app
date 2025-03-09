import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import WordList from '../Components/WordList/WordList'
import Table from '../Components/Table/Table'
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

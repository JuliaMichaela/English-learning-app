import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import WordList from '../Components/WordList/WordList'
import './App.scss'

function App() {

  const words = [
    { id: 1, word: "Hello", transcription: "[həˈləʊ]", translation: "Привет", topic: "Приветствия" },
  ];

  return (
    <>
      <Header />
      <WordList words={words} />
      <Footer />
    </>
  )
}

export default App

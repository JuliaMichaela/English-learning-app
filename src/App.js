import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import WordCard from './components/WordCard/WordCard'
import './style/App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Table/>
    <WordCard/>
    <Footer/>
    </div>
  );
}

export default App;

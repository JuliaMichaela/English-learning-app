import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Wordcard from './components/WordCard/Wordcard';
import './style/App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Table/>
    <Wordcard/>
    <Footer/>
    </div>
  );
}

export default App;

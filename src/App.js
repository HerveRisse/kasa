import './styles/App.css';
import Header from './components/Header';

function App() {
  const title = 'Projet kasa';
  return (
    <div className="App">
      <Header></Header>
      <h1>{ title }</h1>
    </div>
  );
}

export default App;

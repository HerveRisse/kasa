import './styles/App.css';
import Header from './components/Header';
import AppRoutes from './AppRoutes';

function App() {
  const title = 'Projet kasa';
  return (
    <div className="App">
      <Header></Header>
      <h1>{ title }</h1>
      <AppRoutes/>
    </div>
  );
}

export default App;

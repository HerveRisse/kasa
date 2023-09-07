import './styles/App.css';
import Header from './components/Header';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AppRoutes/>
    </div>
  );
}

export default App;

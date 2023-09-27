import './styles/App.css';
import Header from './components/Header';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;

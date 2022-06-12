
import './App.scss';
import NavTop from './components/navTop/NavTop'
import Profile from './components/Main/Profile'
function App() {
  return (
    <div className="App">
      <NavTop></NavTop>
      <header className="App-header">
        <div>Lam's Porfolios</div>
      </header>
      <div>
        <Profile/>
      </div>
    </div>
  );
}

export default App;

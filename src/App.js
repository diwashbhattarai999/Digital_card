import './App.css';
import Profile from './components/Profile'
import ProfileInfo from './components/ProfileInfo'
import About from './components/About'
import Interest from './components/Interest'
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="digitalCard">
          <Profile />
          <div className='digitalCard-info'>
            <ProfileInfo />
            <Button />
            <About />
            <Interest />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

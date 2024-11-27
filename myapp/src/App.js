import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
      </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Choreograph from './choreograph/Choreograph.js';
import Navigation from './components/navigation/Navigation.js';
import Menu from './components/menu/Menu.js';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <div>
      <Router>
          {
            showMenu && <Menu toggleMenu={toggleMenu}/>
          }
          <Navigation toggleMenu={toggleMenu}/>
          <Choreograph />
      </Router>
    </div>
  );
}

export default App;

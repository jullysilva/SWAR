import React from 'react';
import './App.css';
import Menu from './components/Menu.js';
import Principal from './components/ConteudoPrincipal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App ">
      <Menu />
      <header className="App-header pb-5">
        <Principal/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;

import React, { Component } from 'react';

import Navbar from './components/Navbar/'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar fill />
      </div>
    );
  }
}

export default App;

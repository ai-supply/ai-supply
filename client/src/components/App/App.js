import React from 'react';
import SupplyChart from '../SupplyChart/';
import Navbar from '../Navbar/Navbar';

class App extends React.Component {
  componentWillMount() {
    this.anyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  render() {
    return (
      <div className="app">
        <div className="app__navbar">
          <Navbar />
        </div>
        <div className="app__container">
          <SupplyChart />
        </div>
      </div>
    )
  }
}

export default App;

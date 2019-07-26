import React from 'react';
import SupplyChart from '../SupplyChart/';
import Navbar from '../Navbar/Navbar';
import axios from 'axios'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { useAlert } from 'react-alert'
import continuousColorLegend from 'react-vis/dist/legends/continuous-color-legend';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

class App extends React.Component {
  state = {
    paper_indexes: [],
    paper_values: []
  }
  componentWillMount() {
    var paper_indexes = []
    var paper_values = []
    axios.get('http://localhost:5000/api?object=paper&task=data')
      .then(function (response) {
        for (var key in response.data) {
          if (response.data.hasOwnProperty(key)) {
            const month = response.data[key]['index'].substring(5)
            const day = '01'
            const year = response.data[key]['index'].substring(0, 4)
            var datevalue = `${month}-${day}-${year}`
            paper_indexes.push(datevalue)
            paper_values.push(parseInt(response.data[key]['value']))
          }
        }
      })
    this.setState({
      indexes: paper_indexes,
      values: paper_values
    })
  }

  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <div className="app">
          <Navbar />
          <div className="app__container">
            <SupplyChart id={1} status={'good'} indexes={this.state.indexes} values={this.state.values} />
          </div>
        </div>
      </AlertProvider>
    )
  }
}

export default App;

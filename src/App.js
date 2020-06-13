import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RouterManagement from './Containers/RoutManagement/RoutManagement';
import Navbar from './Containers/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RouterManagement />
      </div>
    );
  }
}

export default App;

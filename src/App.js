import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RouterManagement from './Containers/RoutManagement/RoutManagement';
import Navbar from './Containers/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Navbar />
            </div>
            <div className="col-md-9">
              <RouterManagement />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../Layout';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Layout/>
      </div>
    );
  }
}

export default App;

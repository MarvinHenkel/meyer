import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">

              <Navigation />

              <p className="App-intro">
                <code>BLA</code>
              </p>
            </div>
        );
    }
}

export default App;

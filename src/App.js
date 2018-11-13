import React, { Component } from 'react';
import './App.scss';
import PhotosPage from './pages/PhotosPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhotosPage />
      </div>
    );
  }
}

export default App;

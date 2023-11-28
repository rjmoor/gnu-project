import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Main from './components/views/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Logo /> */}
        <Main />
        {/* <ImageLinkForm />
        <FaceRecognition />
        <Footer /> */}
      </div>
    );
  }
}

export default App;

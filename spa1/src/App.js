import React, { Component } from 'react';
import Background from './components/background/background';
import Navigation from './components/navigation/navigation';
import Signin from './components/navigation/signin.signout/signin';
import Logo from './components/static/logo/logo';
import Main from './components/views/main';
import Footer from './components/views/footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: ''
    }
  }
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }
  
  render() {
    return (
      <div className="App">
        <Navigation />
        <Background />
        <Logo />
        {this.state.route === 'signin' || this.state.route === 'signout'
          ?<Signin />
          : <div>
              <Main />
              <Footer />
            </div>
        }
      </div>
    );
  }
}

export default App;

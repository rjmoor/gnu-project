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
      route: 'home',
      isSignedIn: 'False'
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
        <Background />
        {this.state.route === 'signin' || this.state.route === 'signout'
          ? <div>
            <Logo />
            <Signin onRouteChange={this.onRouteChange} />
            </div>
          : <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Main />
          </div>
        }
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Background from './components/background/background';
import Navigation from './components/navigation/navigation';
import Register from './components/navigation/register/register';
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
      isSignedIn: false
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
    const { route } = this.state;

    let content;
    if (route === 'signin' || route === 'signout') {
      content = (
        <div>
          <Logo />
          <Signin onRouteChange={this.onRouteChange} />
        </div>
      );
    } else if (route === 'register') {
      content = <Register onRouteChange={this.onRouteChange} />;
    } else {
      content = (
        <div>
          <Navigation onRouteChange={this.onRouteChange} />
          <Main />
          <Footer />
        </div>
      );
    }

    return (
      <div className="App">
        <Background />
        {content}
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import SignInAndSignUp from './pages/signInAndSignUp';
import {auth} from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
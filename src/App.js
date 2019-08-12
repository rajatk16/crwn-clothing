import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'

import './App.css';
import Header from './components/Header';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import CheckoutPage from './pages/checkout';
import SignInAndSignUp from './pages/signInAndSignUp';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/userActions';
import {selectCurrentUser} from './redux/user/userSelectors'

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route 
            exact 
            path="/signin" 
            render={() => 
              this.props.currentUser ? (
                <Redirect to="/"/>
              ) : (
                <SignInAndSignUp />
              )
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
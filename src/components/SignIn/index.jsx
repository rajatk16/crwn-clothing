import React, {Component} from 'react'

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import './style.css';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async event => {
    event.preventDefault();
    
    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '',password: ''})
    } catch (error) {
      console.log(error)
    }

  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput 
            name="password" 
            label="Password"
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
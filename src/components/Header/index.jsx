import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {HeaderContainer, LogoContainer, OptionsContainer, OptionContainer} from './styles'
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import {selectCartHidden} from '../../redux/cart/cartSelectors'
import {selectCurrentUser} from '../../redux/user/userSelectors'

const Header = ({currentUser, hidden}) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"/>
      </LogoContainer>
      <OptionsContainer>
        <OptionContainer to="/shop">
          SHOP
        </OptionContainer>
        <OptionContainer to="/shop">
          CONTACT
        </OptionContainer>
        {
          currentUser ? 
          <OptionContainer as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionContainer>
          :
          <OptionContainer to="/signin">
            SIGN IN
          </OptionContainer>
        }
        <CartIcon/>
      </OptionsContainer>
      {
        hidden ? null : (
          <CartDropdown/>
        )
      }
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
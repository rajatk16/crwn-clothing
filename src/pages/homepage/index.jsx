import React from 'react'
import Directory from '../../components/Directory';
import {HomePageContainer} from './styles'

const HomePage = ({history}) => {
  return (
    <HomePageContainer>
      <Directory history={history} />
    </HomePageContainer>
  )
}

export default HomePage;
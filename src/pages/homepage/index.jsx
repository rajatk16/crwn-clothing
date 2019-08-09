import React from 'react'
import Directory from '../../components/Directory';
import './style.css';

const HomePage = ({history}) => {
  return (
    <div className="homepage">
      <Directory history={history} />
    </div>
  )
}

export default HomePage;
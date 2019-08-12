import React from 'react'
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview'
import Collection from "../collection";

const ShopPage = ({match}) => {
  return (
    <div className="shop-page">
      <Route 
        exact 
        path={`${match.path}`} 
        component={CollectionsOverview} 
      />
      <Route exact path={`${match.path}/:collectionId`} component={Collection}/>
    </div>
  )
}

export default ShopPage;
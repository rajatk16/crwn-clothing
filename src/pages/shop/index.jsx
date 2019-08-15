import React, {Component} from 'react'
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/CollectionsOverview'
import Collection from "../collection";
import {updateCollections} from '../../redux/shop/actions';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }
  render() {
    const {match} = this.props;
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
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
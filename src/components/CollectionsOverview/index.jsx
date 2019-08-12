import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import './style.css';
import PreviewCollection from '../PreviewCollection';
import {selectCollectionsForPreview} from '../../redux/shop/shopSelectors'

const CollectionsOverview = ({collections}) => (
  <div className="collections-overview">
    {collections.map(({id, ...otherCollectionProps}) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);

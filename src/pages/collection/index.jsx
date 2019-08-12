import React from 'react';
import {connect} from 'react-redux';

import './style.css';
import CollectionItem from '../../components/CollectionItem';
import {selectCollection} from '../../redux/shop/shopSelectors';

const Collection = ({collection}) => {
  const {title, items} = collection;
  return (
    <div className="collection">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => {
            return (
              <CollectionItem key={item.id} item={item} />
            )
          })
        }
      </div>
    </div>
  )
} 

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
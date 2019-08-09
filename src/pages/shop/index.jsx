import React, {Component} from 'react'
import data from './data';

import PreviewCollection from '../../components/PreviewCollection';

class ShopPage extends Component {
  state = {
    collections: data
  }

  render() {
    const {collections} = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({id, ...otherCollectionProps}) => {
            return (
              <PreviewCollection key={id} {...otherCollectionProps} />
            )
          })
        }
      </div>
    )
  }
}

export default ShopPage;
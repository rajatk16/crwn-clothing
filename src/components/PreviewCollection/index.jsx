import React from 'react'

import CollectionItem from '../CollectionItem';
import './style.css';

const PreviewCollection = ({title, items}) => {
  return (
    <div className="preview-collection">
      <h1 className="title">
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...otheritemProps}) => {
            return (
              <CollectionItem key={id} {...otheritemProps}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default PreviewCollection;
import React from 'react'

import CollectionItem from '../CollectionItem';
import './style.css';

const PreviewCollection = (props) => {
  console.log(props)
  return (
    <div className="preview-collection">
      <h1 className="title">
        {props.title.toUpperCase()}
      </h1>
      <div className="preview">
        {props.items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return (
              <CollectionItem key={item.id} item={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default PreviewCollection;
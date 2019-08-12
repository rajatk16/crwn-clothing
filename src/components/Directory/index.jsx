import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './style.css';
import {selectSections} from '../../redux/directory/directorySelectors'
import MenuItem from '../MenuItem';

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({id, ...otherSectionProps}) => {
        return (
          <MenuItem 
            key={id} 
            {...otherSectionProps}
          /> 
        )
      })}
    </div>
  );
}

const mapStateToProps =  createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Directory);
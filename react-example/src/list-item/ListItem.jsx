import React from 'react';
import PropTypes from 'prop-types';
import './list-item.scss';

const propTypes = {
    item: PropTypes.node,
}

const ListItem = (props) => {
    return (
      <div className="list-item">
          {props.item}
      </div>
    );
}

ListItem.propTypes = propTypes;
export default ListItem;

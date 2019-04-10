import React from 'react';
import PropTypes from 'prop-types';
import './list-item.scss';

// This is an object that defines the props that this component explicitly accepts.
// This includes the type for the prop; if the type provided does not match the definition
// a console warning is thrown.
const propTypes = {
    item: PropTypes.node,
}

// Functional component for rendering a single item in the list.
const ListItem = (props) => {
    return (
      <div className="list-item">
        {props.item}
      </div>
    );
}

// This lets react know what the acceptable props are for this component.
ListItem.propTypes = propTypes;
export default ListItem;

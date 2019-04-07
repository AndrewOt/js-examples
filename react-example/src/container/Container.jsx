import React, { Component } from 'react';
import './container.scss';
import ListContainer from '../list-container/ListContainer';

class Container extends Component {
  render() {
    return (
      <div className="app-container">
        <ListContainer />
      </div>
    );
  }
}
 
export default Container;

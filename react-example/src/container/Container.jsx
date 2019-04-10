import React from 'react';
import './container.scss';
import ListContainer from '../list-container/ListContainer';

// This is a functional component to hold the list container. A functional component is like the render
// method of a class component, it ultimately returns the component to be rendered.
const Container = () => {
    return (
      <div className="app-container">
        <ListContainer />
      </div>
    );
}
 
export default Container;

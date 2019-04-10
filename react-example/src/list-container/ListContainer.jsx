import React, { Component } from 'react';
import ListItem from '../list-item/ListItem';
import AddButton from '../add-button/AddButton';
import './list-container.scss';

// This is a class component. The difference is that we have a constructor, state, and lifecycle methods.
// In this case, we need to make use of the state.
class ListContainer extends Component {
    constructor(props) {
        super(props);
        
        // In the constructor is the only place where we can directly set the state because we
        // are initializing the state here. Every else, react needs to know when the state changes
        // so it can re-render.
        this.state = {
            items: [],
            currentValue: '',
        }

        // We need to bind these functions to this class instance so this will be in scope.
        this.addListItem = this.addListItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    addListItem(event) {
        event.preventDefault();
        const currentInput = this.state.currentValue;
        // Note: when we change the state, it will cause a re-render.
        // We shouldn't mutate state directly, so to add something to the array, we need to reference,
        // the previousState in the arrow function and return the new state to this.setState.
        this.setState((previousState) => {
            if (currentInput !== "") {
                return {
                    items: [ ...previousState.items, currentInput],
                    currentValue: ''
                };
            }
            return previousState;
        });
    }

    handleInputChange(event) {
        this.setState({ currentValue: event.target.value });
    }

  render() {
      // Here we are using map to build an array of ListItem components that can be
      // rendered as a list. React lets you put the elements directly inside an array
      // and render the array, it figures out what to do with it :)
      const listItems = this.state.items.map((item, index) => {
        return <ListItem item={item} index={index.toString()} />
      });

    return (
        // This is JSX syntax. It is still javascript, it's just javascript that feels like markup because this is what
        // gets displayed on the page.
      <div className="list-container">
            <div className="title">Todo list</div>
            {/* JSX syntax for rendering variables and executing rudimentary javascript code that returns a renderable thing. */}
            {listItems}
            <form onSubmit={this.addListItem}>
                {/* We add the value prop and onChange handler to have complete control over the input component. See https://reactjs.org/docs/forms.html for more info. */}
                <input type="text" value={this.state.currentValue}  onChange={this.handleInputChange} className="text-input" />
                <AddButton />
            </form>
      </div>
    );
  }
}

export default ListContainer;

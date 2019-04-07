import React, { Component } from 'react';
import ListItem from '../list-item/ListItem';
import AddButton from '../add-button/AddButton';
import './list-container.scss';

class ListContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
            currentValue: '',
        }

        this.addListItem = this.addListItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    addListItem(event) {
        event.preventDefault();
        const currentInput = this.state.currentValue;
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
      const listItems = this.state.items.map((item, index) => {
        return <ListItem item={item} index={index.toString()} />
      });

    return (
      <div className="list-container">
            <div className="title">Todo list</div> 
            {listItems}
            <form onSubmit={this.addListItem}>
                <input type="text" value={this.state.currentValue}  onChange={this.handleInputChange} className="text-input" />
                <AddButton clickCallback={this.addListItem} />
            </form>
      </div>
    );
  }
}

export default ListContainer;

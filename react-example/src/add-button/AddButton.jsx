import React from 'react';
import './add-button.scss'; 

// This is a functional component for the add button.
const AddButton = (props) => {
    return (
        <input type="submit" className="add-button" value="+" />
    );
}

export default AddButton;

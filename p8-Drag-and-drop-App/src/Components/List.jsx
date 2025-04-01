import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colors: [...props.colors] }; // Ensure state is set properly
    this.draggedItemIndex = null;
  }

  // Handle the start of a drag event
  onDragStart = (e, index) => {
    this.draggedItemIndex = index;
    e.target.style.opacity = 0.5; // Visual feedback when dragging
  };

  // Handle when an item is dragged over
  onDragOver = (e) => {
    e.preventDefault(); // Necessary to allow drop
  };

  // Handle drop event (reorder items)
  onDrop = (e, dropIndex) => {
    const draggedItem = this.state.colors[this.draggedItemIndex];
    let updatedColors = [...this.state.colors];

    // Remove dragged item from its original position
    updatedColors.splice(this.draggedItemIndex, 1);

    // Insert dragged item at the new position
    updatedColors.splice(dropIndex, 0, draggedItem);

    this.setState({ colors: updatedColors });
    e.target.style.opacity = 1; // Reset opacity
  };

  render() {
    const listItems = this.state.colors.map((item, index) => (
      <li
        key={index}
        style={{ backgroundColor: item }}
        data-id={index}
        draggable="true"
        onDragStart={(e) => this.onDragStart(e, index)}
        onDragOver={this.onDragOver}
        onDrop={(e) => this.onDrop(e, index)}
      >
        {item}
      </li>
    ));

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default List;

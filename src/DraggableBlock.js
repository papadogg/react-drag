import React, { Component } from 'react';

class DraggableBlock extends Component {
  dragStart = (e) => {
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text', e.target.innerText);
  }
  render() {
    return (
      <div className='draggable'
        draggable
        onDragStart={this.dragStart}
      >
        {this.props.name}
      </div>
    );
  }
}

export default DraggableBlock;

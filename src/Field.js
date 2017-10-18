import React, { Component } from 'react';

class Field extends Component {
  state = {
    innerText: ''
  }

  change = (e) => {
    this.setState({
      innerText: e.target.value
    });
  }

  dragEnter = (e) => {
    window.getSelection().removeAllRanges();
  }


  render() {
    return (
      <textarea className='field' autoFocus
        value={this.state.innerText}
        onChange={this.change}
        onDragEnter = {this.dragEnter}
      />
    );
  }
}

export default Field;

import React, { Component } from 'react';

import DraggableBlock from './DraggableBlock';
import Field from './Field';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Field />
        <div className='blocks'>
          <DraggableBlock name='App'/>
          <DraggableBlock name='DraggableBlock'/>
          <DraggableBlock name='Field'/>
          <DraggableBlock name='div'/>
          <DraggableBlock name='Component'/>
          <DraggableBlock name='React'/>
        </div>
      </div>
    );
  }
}

export default App;

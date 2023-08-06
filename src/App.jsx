import React, { Component } from 'react';
import Form from './components/form';

class App extends Component {
  render() {
    return (
      <div className='absolute flex justify-center items-center top-[50%] left-[50%] right-1/2 bottom-1/2'>
        <Form />
      </div>
    );
  }
}

export default App;
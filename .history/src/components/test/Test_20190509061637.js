import React, { Component } from 'react';

class Test extends Component {
  state = {
    test: 'test'
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
  }
}

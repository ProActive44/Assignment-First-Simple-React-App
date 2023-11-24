import React, { Component } from 'react'
import "./App.css"
import Counter from './components/Counter'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Counter App</h1>
        <Counter/>
      </div>
    )
  }
}

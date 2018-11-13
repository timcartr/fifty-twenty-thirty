import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class home extends Component {


  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2> <Link to='/overview'>Overview</Link></h2>
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios';

export default class essential extends Component {
  constructor(){
    super()

    this.state = {
      transactions: []
    }
  }

  componentDidMount(){
    axios.get('/api/essentialTrans').then(res => {
      console.log(res.data)
      // this.setState({
      //   transactions: res.data
      // })
    })
  }

  render() {
    return (
      <div>
        <h1>Essential</h1>
        {this.state.transactions.map((transactions, index) => {
          return(
            <p>transactions {index}</p>
          )
        })}
      </div>
    )
  }
}

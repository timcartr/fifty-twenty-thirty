import React, { Component } from 'react'
import axios from 'axios'

export default class lifestyleModual extends Component {
  constructor(){
    super()

    this.state = {
      monthlyIncome: 5226.65,
      transactions: []
    }
  }

  componentDidMount(){
    axios.get('/api/lifestyleTrans').then(res => {
      console.log(res.data)
      this.setState({
        transactions: res.data
      })
    })
  }

  render() {
    return (
      <div style={{width:'25%', margin:'0 auto'}}>
        <h1>Lifestyle</h1>
        {this.state.transactions.map(transactions => {
          let percentages = transactions.amount/this.state.monthlyIncome*100
          return(
            <div className='transactionTable' style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <div >{ transactions.description }</div>
              <div>{ percentages.toFixed(2) }%</div>
            </div>
          )
        })}
      </div>
    )
  }
}

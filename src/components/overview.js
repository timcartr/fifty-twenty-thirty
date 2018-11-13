import React, { Component } from 'react'
import axios from 'axios'
import Rechart from './rechart'
import EssentialModual from './essentialModual';
import LifestyleModual from './lifestyleModual';

export default class overview extends Component {
  constructor(){
    super()

    this.state = {
      firstName: ''
    }
  }

  componentDidMount(){
    axios.get('/api/test').then((res) => {
      let firstName = res.data[0].name.split(' ')
      console.log(firstName[0])
      this.setState({
        firstName: firstName[0]
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome back, {this.state.firstName}</h1>
        <Rechart />
        <EssentialModual/>
        <LifestyleModual/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import {PieChart} from 'react-easy-chart'

export default class easychart extends Component {
  constructor(){
    super()

    this.state = {
      dataDisplay: ''
    }
  }
  render() {
    return (
      <div>
    <div>
      <PieChart
        size={400}
        innerHoleSize={300}
        styles={{
          '.chart_lines': {
            strokeWidth: 10
          },
          '.chart_text': {
            fontFamily: 'serif',
            fontSize: '1.25em',
            fill: '#333'
          }
        }}
        data={[
          { key: 'A', value: 100, color: '#0088FE' },
          { key: 'B', value: 200, color: '#00C49F' },
          { key: 'C', value: 500, color: '#FFBB28' }
        ]}
        clickHandler={
          (d) => this.setState({
            dataDisplay: `The value of ${d.data.key} is ${d.value}`
          })
        }
      />
    </div>
    <div>
    {this.state.dataDisplay ? this.state.dataDisplay : 'Click on a segment to show the value'}
    </div>
  </div>
    )
  }
}

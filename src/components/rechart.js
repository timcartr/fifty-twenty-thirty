import React, { Component } from 'react'
// import axios from 'axios'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  {name: 'Group A', value: 50},
  {name: 'Group B', value: 30},
  {name: 'Group C', value: 20},
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// const RADIAN = Math.PI / 180;

export default class overview extends Component {
  constructor(){
    super()

    this.state = {
      dataDisplay: ''
    }
  }

  componentDidMount(){
    
  }

  onPieClick(i){
    this.setState({
      dataDisplay: i
    })
  }

  render() {
    return (
      <div style={{height:'300px'}}>
        <ResponsiveContainer height='100%'>
          <PieChart>
            <Pie
              data={data} 
              // cx={120} 
              // cy={200} 
              innerRadius='90%'
              outerRadius='100%' 
              fill="#8884d8"
              paddingAngle={2}
              startAngle={90}
              endAngle={450}
              >
              {
                data.map((entry, index) => 
                <Cell fill={COLORS[index % COLORS.length]}
                onClick={ e => this.onPieClick(data[index].value)}
                />
                )
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* <div>
          {this.state.dataDisplay ? this.state.dataDisplay : 'Click on a segment to show the value'}
        </div> */}
      </div>
    )
  }
}

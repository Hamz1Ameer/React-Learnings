import React, { Component } from 'react';
import '../App.css'

class TimeDate extends Component {
    constructor(props){
        super(props);
        this.state={date:new Date()}
      }
      componentDidMount(){
        this.timerId=setInterval(
          ()=>this.tick(),1000
        )
      }
    
      componentWillUnmount(){
        clearInterval(this.timerId);
      }
    
      tick(){
        this.setState({
          date: new Date()
        })
      }
    render() {
        return (
                  <div className='App'>
                    <h3>Time is {this.state.date.toLocaleTimeString()}.</h3>
                  </div>
                );
              }
            }
export default TimeDate;
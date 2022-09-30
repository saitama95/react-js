import './App'
import React from 'react'
class Student extends React.Component{
  constructor(){
    super();
    this.state = {
      counter:0
    }
  }
  componentWillUnmount(){
    alert('componentWillUnmount Call')
  }
  render(){
    return(
      <div className="App"> 
         <h1>Student Component</h1>
      </div>
    )
  }
}
export default Student;
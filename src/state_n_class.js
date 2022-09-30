import React from 'react'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:1
    }
  }
  apple(){
    this.setState({data:this.state.data+1})
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>UpData</button>
      </div>
    )
  }
}
export default App
import './App'
import './Style.css'
import style from './Custom.module.css'
import React from 'react'
function App(){
  return(
    <div className="App"> 
      <h1 className="primary">Style type 1 React</h1>
      <h2 style={{color:'red',backgroundColor:"brown"}}>Inline Style</h2>
      <h3 className="{style.success}">Style type 3</h3>
    </div>
  )
}
export default App;
import './App'
import React from 'react'
import {Alert} from 'react-bootstrap'
function App(){
  return(
    <div className="App"> 
      <h1>Bootstrap</h1>
        <Alert  variant="warning">
          This is a   alert—check it out!
        </Alert>
    </div>
  )
}
export default App;
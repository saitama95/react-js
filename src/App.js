import './App'
import React,{useState,useEffect} from 'react'
import Effect from './Effect'
function App(){
  const [count,setCount] = useState(100)
  const [data,setData] = useState(10)
  
  return(
    <div className="App"> 
      <Effect count = {count} data = {data}/>
       <button onClick={()=>setCount(count+1)}>Count</button>
      <button onClick={()=>setData(data+1)}>Data</button>
    </div>
  )
}
export default App;
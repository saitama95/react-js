import React,{useEffect, useState}  from 'react'
function Effect(props){
    const [number,setNumber] = useState(0)
    useEffect(()=>{
        console.log('useEffect data')
      },[props.data])
    return (
        <div>
            <h1>SetNumber {number}</h1>
            <h1>Count {props.count}</h1> 
            <h1>Data {props.data}</h1>
        </div>
    )
}
export default Effect;
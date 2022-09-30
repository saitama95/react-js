import React,{useEffect}  from 'react'
function Effect(props){
    useEffect(()=>{
        console.log('useEffect data')
      },[props.data])
    return (
        <div>
            <h1>Count {props.count}</h1> 
            <h1>Data {props.data}</h1>
        </div>
    )
}
export default Effect;
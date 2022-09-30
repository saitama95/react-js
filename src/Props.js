import React from 'react'
function Props(props){
    return (
        <div>
            <h1>Props Compoent</h1>
            <button onClick={props.data}>Call Props</button>
        </div>
    )
}
export default Props
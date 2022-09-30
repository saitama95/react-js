//  import { useState } from "react";
import {useState} from 'react'
function Form(){
    const [name,setName] = useState("")
    const [tmc,setTmc] = useState(false)
    const [interset,setInterset] = useState("")
    function getFormData(e){
        e.preventDefault();
        console.warn(name,tmc,interset)
    }
    return (
        <div>
            <h1>Form Handling</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/><br/>
                <select onChange={(e)=>setTmc(e.target.value)}>
                        <option>Select</option>
                        <option value="1">Marvel</option>
                        <option value="2">DC</option>
                 </select> <br/>
                 <input type="checkbox" onChange={(e)=>setInterset(e.target.checked)}/><span>Accept Term and Condition</span><br/>
                 <button>Submit</button>  
            </form>
        </div>   
    )
}
export default Form
import React from 'react'
class User extends React.Component{
    constructor(){
        super();
        this.state = {
            email:"Shubham@gmail.com"
        }
    }
    render(){
        console.log("Render methid",this.state.email)
        return(
        <div>
            <h1>User Component</h1>
            <button onClick={()=>this.setState({email:"change@gmail.com"})}>Change</button>
        </div>
        )
    }
}
export default User
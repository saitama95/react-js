import React,{useState} from 'react'
function Login(){
    
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const [userErr,setUserErr] = useState(false)
    const [passwordErr,setPasswordErr] = useState(false)
    const [print,setPrint] = useState(false)

    function loginForm(e){
        e.preventDefault();
        if(user.length<3 || password.length<3){
            alert('Type correct valie')
        }
        else{
            alert("All good")
        }
    }
    function userHandle(e){
       let item =  e.target.value
       if(item.length<3){
            setUserErr(true)
       }else{
           setUserErr(false)
       }
       setUser(item)
    }
    function passwordHandle(e){
        let item = e.target.value
        if(item.length<3){
            setPasswordErr(true)
        }else{
            setPasswordErr(false)
        }
        setPassword(item)
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={loginForm}>
                <input type="text" onChange={userHandle} placeholder="Enter the id"/>
                {userErr?<span>User not Valid</span>:null}<br/>
                
                <input type="text" onChange={passwordHandle} placeholder="enter the password"/>
                {passwordErr?<span>Invalid password</span>:null}<br/>
                
                <button>Submit</button>
            </form>

                {
                print?<h1>{user}</h1>:null
                }
         </div>   
    )
}
export default Login
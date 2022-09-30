import {useState} from 'react'
function Profile(){
    const [loggedIn] = useState(false)
        return (
            <div>
                {loggedIn?<h1>True</h1>:null}
            </div>
        )
}
export default Profile
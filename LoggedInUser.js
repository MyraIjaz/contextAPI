import { useUser } from "./UserContext"

function LoggedInUser(){
    const {user}= useUser()
    return (
        <>
        <p>
           Hello, <span>{user.name}</span>
        </p>
        </>
    )
}

export default LoggedInUser
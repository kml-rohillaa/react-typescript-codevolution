import { useState } from "react"


type AuthUser = {
    name : string 
    email : string
}

export const LoggedIn = () => {
    const [user , setUser] = useState<AuthUser | null>(null)
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return <div>
        <button onClick={handleLogin}>Log in</button>
        <button onClick={handleLogout}>Log out</button>
        <div>User is{isLoggedIn ?  'logged in' : 'logged out'}</div>
        <div>User name is {user?.name}</div>
        <div>User email is {user?.email}</div>
    </div>
}
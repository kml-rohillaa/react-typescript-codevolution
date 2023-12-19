import React from "react"
import Person from "./Person"
type GreetProps = {
    name : string,
    messageCount? : number,
    isLoggedIn : boolean
}
const Greet = (props : GreetProps) => {
    const personName = {
        first : "Kamal" ,
        last : "Rohilla"
    }
    const {
        messageCount = 0
    } = props
    return <div>
        {props.isLoggedIn ?  `${props.name}, You have ${messageCount} unread messages` : `Not logged in user`}
        <Person
         name = {personName}
        />
    </div>
}

export default Greet
import { use, useState } from "react"
import "./ShortCircuit.css"
export const ShortCicuit = ()=>{
    
    const[loggIn,setloggIn] = useState(true)
    const[user,setUser] = useState("")
    return(
        <section className="short-container">
            <h1 className="heading">Welcome to Short Circuit Evalution</h1>
            {loggIn && <p>Logging Success</p>}
            {user?`Hello${user}`:"you are log out"}
            <div className="grid grid-three-cols">
                <button onClick={()=>setloggIn(!loggIn)}>Loggin stat</button>
                <button onClick={()=>setUser("Hi Hemant")}>Set User</button>
                <button onClick={()=>setUser("")}>clear</button>
            </div>
        </section>
    )

}
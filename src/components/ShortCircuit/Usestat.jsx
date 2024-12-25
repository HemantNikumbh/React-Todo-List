import { useState } from "react"

export const Usestate = ()=>{
    const[count,setCount] = useState(0)
    return(
        <section className="container">
            <p>{count}</p>
            <br/>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </section>
    )
}
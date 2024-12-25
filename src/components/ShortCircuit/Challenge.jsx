import { useState } from "react"
import "./ShortCircuit"
export const Challenge = ()=>{
    const[input,setInput] = useState(0)
    const[count,setcount] = useState()

    const handleIncreament = ()=>{
        setInput(input+count)

    }

    const handleDecreament = () =>{
        setInput(input-count)
    }

    const handleReset = () =>{
        setInput("")
    }


    return(
        <>
        <div className="container">
            <h1>
                useState Challenge
            </h1>
            <p>count:{input}</p>
            <div>
                <label>
                    <input type="text" value={count} onChange={(e)=>setcount(Number(e.target.value))} placeholder="step"
                    />
                </label>
            </div>
            <div className="grid grid-three-cols">
                <button onClick={handleIncreament}>Increament</button>
                <button onClick={handleDecreament}>Decreament</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
        </>
    )

}
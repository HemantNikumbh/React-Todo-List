import { MdCheck,MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";
import "./Todo.css";
export const Todo = () =>{
    const[inputvalue,setinput] = useState("")
    const[task,settask] = useState(()=>{
        const todoitem = localStorage.getItem("todo")
        if(!todoitem) return []
        return JSON.parse(todoitem)
    })
    const[DateTime,setDateTime] = useState("")
    
    const handleinputchange = (value) =>{
        setinput(value);
    }

    const handlesubmit = (event)=>{ 
        event.preventDefault();

        if(!inputvalue) return

        if(task.includes(inputvalue)){
            setinput("")
            return
        }

        settask((prevTask) => [...prevTask,inputvalue])

        setinput("")
}
    useEffect(()=>{
        const interval = setInterval(()=>{
            const now = new Date()
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate}-${formattedTime}`);
        },1000)

        return ()=>clearInterval(interval);
    },[])


    //handle delete operation

    const handledelete = (value) =>{
        console.log(task);
        console.log(value)
        const updatetask = task.filter((curTask)=>curTask!==value)
        settask(updatetask)

    }

    // data store localstorage

    localStorage.setItem("todo",JSON.stringify(task));

    return (
    
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2>{DateTime}</h2>
            </header>
            <section className="form">
                <form onSubmit={handlesubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputvalue}
                        onChange={(event)=>handleinputchange(event.target.value)} />
                    </div>
                    <div>
                    <button type="submit" className="todo-btn">
                        Add Task
                    </button>
                    </div>
                </form>
                <section className="myUnOrdList">
                    <ul>
                        {
                            task.map((curTask,index)=>{
                                return<li key={index} className="todo-item">
                                    <span>{curTask}</span>
                                    <button className="check-btn"><MdCheck /></button>
                                    <button className="delete-btn" onClick={()=>handledelete(curTask)}><MdDeleteForever /></button>
                                </li>
                            })
                        }
                    </ul>
                </section>
            </section>
        </section>
    )

}
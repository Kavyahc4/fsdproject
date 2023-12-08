import React, { useState } from "react";

const App=()=>{
    const [tasks,setTasks]=useState([])
    const [newTask,setNewTask] =useState("")

    const addTask=()=>{
        if (newTask.trim() !== ""){
            setTasks([...tasks,newTask]);
            setNewTask("")
        }
    }

const removeTask=(index)=>{
    const updatedTask=[...tasks]
    updatedTask.splice(index,1)
    setTasks(updatedTask)
};
 return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h2 className="mb-4">TO DO LIST</h2>
                <div className="mb-3">
                    <input type="text" className="from-control" placeholder="Enter the Task" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
                </div>
                <button className="btn btn-primary" onClick={addTask}>Add task</button>
                <ul className="list-group mt-4 row">
                    {tasks.map((task,index)=>(
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {task}
                            <button className="btn btn-danger" onClick={()=>removeTask(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
 )

}
export default App;











import React, { useState } from 'react'
import './Todo.css'
import Addtask from './Addtask'
import List from './List'
const Todo = () => {
  const[tasks, setTasks] = useState ([])

  const addTask= (title)=>{
    const newTask=[...tasks,  {title}]
    setTasks(newTask);
  }

  const removeTask=(index)=>{
    const newTask=[...tasks]
    newTask.splice(index,1);
    setTasks(newTask);
  }

  return (
    <>
        <div className='container'>
            <div className='Header'>TODO APP</div>
            <div className='add-task'>
              <Addtask addTask={addTask}/>
            </div>
            <div className='tasks'>
              {tasks.map((task, index)=>(
                <List task={task} removeTask={removeTask} index={index} key={index}/> 
              ))}
            
            </div>
        </div>
    </>
  )
}

export default Todo
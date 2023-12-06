import React from 'react'
import './Todo.css'
import Addtask from './Addtask'
import List from './List'
const Todo = () => {
  return (
    <>
        <div className='container'>
            <div className='Header'>TODO APP</div>
            <div className='add-task'>
              <Addtask />
            </div>
            <div className='tasks'>
              <List /> 
            </div>
        </div>
    </>
  )
}

export default Todo
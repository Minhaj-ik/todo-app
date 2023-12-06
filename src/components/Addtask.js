import React from 'react'

const addtask = () => {
  return (
    <>
        <div className="input-container" >
            <input type="text" className="input" placeholder="Add a new task" />
            <button className="add-btn">ADD</button>
        </div>
    </>
  )
}

export default addtask
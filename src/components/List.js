import { Button } from 'bootstrap'
import React from 'react'

const list = () => {
  return (
    <div>
        <div className="list-task">
            Task Name
            <button className="delete-btn">Delete</button>
        </div>
    </div>
  )
}

export default list
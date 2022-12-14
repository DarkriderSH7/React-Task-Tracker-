import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className='task' onDoubleClick={()=>onToggle(task.id)}>
        <h3>{task.text} <FaTimes style={{cursor: 'pointer'}} onClick={()=>onDelete(task.id) }/></h3>
        
        </div>
  )
}

export default Task
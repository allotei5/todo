import React from 'react'
import { TaskLists } from '../TaskLists/TaskLists'

export const Tasks = ({tasks, onDelete}) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskLists task={task} key={index} onDelete={onDelete}/>
      ))}
    </div>
  )
}

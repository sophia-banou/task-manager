import React, { useContext, useState } from 'react'
import '../css/TaskList.css'
import { useTaskContext } from '../TaskContext'; // Ensure correct path




const TaskListItem = ({ task, onEditClick }) => {
    const { toggleTaskCompletion } = useTaskContext();
    return (
        <li  className={`task-item ${task.completed ? 'completed' : ''}`}  >
        
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="custom-checkbox"
        />
        <div className="clickable-div" onClick={() => onEditClick(task)}>
        {task.title}
        </div>
      </li>
    );
  };

  export default TaskListItem;
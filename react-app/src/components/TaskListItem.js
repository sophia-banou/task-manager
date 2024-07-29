import React from 'react'
import '../css/TaskList.css'
import { useTaskContext } from '../context/TaskContext';




const TaskListItem = ({ task, onEditClick }) => {

  // Get the function toggleTaskCompletion from context
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
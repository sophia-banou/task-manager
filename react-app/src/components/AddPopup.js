import React, { useState} from 'react';
import { useTaskContext } from '../context/TaskContext';
import '../css/AddPopup.css'; 

const TaskPopup = ({ onClose }) => {
    // Get setTasks from context
    const {setTasks} = useTaskContext();

    // State for task title and description
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    // Function that adds the new task to the previous ones
    const addTask = (task) => {
        setTasks(tasks => [...tasks, task]);
    };

    // Function that handles adding a new task
    const handleAddTask = () => {
        
        // Prevents adding tasks without a title
        if (!taskTitle.trim()) return; 

        const newTask = {
            id: Date.now(),
            title: taskTitle,
            description: taskDescription,
            completed: false
        };

        // Add new task and close popup
        addTask(newTask);
        onClose(); 
    };
    

    return (
        <div className="task-popup-overlay">
            <div className="task-popup-content">
                <div className="popup-top">
                    <div className="task-popup-close" onClick={onClose}>
                        <img src="close.png" alt="Close Icon" className="close-button"></img>
                    </div>
                    <input
                        type="text"
                        placeholder="Task title e.g. walk the dog"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        className='input-title'
                        autoFocus
                    />
                </div>
                <div className="popup-middle">
                <textarea
                    type="text"
                    placeholder="Task description (optional)"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className='description'
                    maxLength="360"
                />
                </div>
                <div className="popup-bot">
                <button onClick={handleAddTask} disabled={!taskTitle.trim()} className='add-button'>Add Task</button>
                </div>
            </div>
        </div>
    );
};

export default TaskPopup;

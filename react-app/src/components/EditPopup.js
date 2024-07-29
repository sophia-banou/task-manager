import React, { useState} from 'react';
import { useTaskContext } from '../context/TaskContext';
import '../css/EditPopup.css'; 

const TaskEditPopup = ({ task, onClose }) => {

    // Get setTasks from context
    const { setTasks } = useTaskContext();

    // State for managing the task's title, description, and completion status
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [completed, setCompleted] = useState(task.completed);

    // Function to delete the task
    const handleDelete = () => {
        setTasks(tasks => tasks.filter(t => t.id !== task.id));
        // Close the popup after deleting
        onClose(); 
    };

    // Function to save the task
    const handleSave = () => {
        setTasks(tasks => tasks.map(t =>
            t.id === task.id ? { ...t, title, description, completed } : t
        ));
        // Close the popup after saving
        onClose(); 
    };

    // Function to handle checkbox changes
    const handleCheckboxChange = () => {
        setCompleted(prev => !prev);
    };

    return (
        <div className="task-popup-overlay">
            <div className="task-popup-content">
                <div className="popup-top">
                    <div className="task-popup-close" onClick={onClose}>
                        <img src="close.png" alt="Close Icon" className="close-button" />
                    </div>
                    <div className='input-div'>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={handleCheckboxChange}
                            className="task-popup-checkbox"
                        />
                        <input
                            type="text"
                            placeholder="Task title e.g. walk the dog"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='input-title2'
                        />
                    </div>
                </div>
                <div className="popup-middle">
                    <textarea
                        placeholder="Task description (optional)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='description'
                        maxLength="360"
                    />
                </div>
                <div className="popup-bot2">
                    <button  className='delete-button'>
                        <img  src="delete.png" onClick={handleDelete} alt="Delete Icon" className="delete-icon" />
                    </button>
                    <button onClick={handleSave} disabled={!title.trim()} className='add-button'>Save</button>
                </div>
            </div>
        </div>
    );
};

export default TaskEditPopup;

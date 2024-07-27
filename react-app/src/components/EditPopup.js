// TaskEditPopup.js
import React, { useState, useEffect } from 'react';
import { useTaskContext } from '../TaskContext';
import '../css/EditPopup.css'; // Make sure this CSS file is created

const TaskEditPopup = ({ task, onClose }) => {
    const { setTasks } = useTaskContext();
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [completed, setCompleted] = useState(task.completed);

    useEffect(() => {
        setTitle(task.title);
        setDescription(task.description);
        setCompleted(task.completed);
    }, [task]);

    const handleDelete = () => {
        setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
        onClose(); // Close the popup after deleting
    };

    const handleSave = () => {
        setTasks(prevTasks => prevTasks.map(t =>
            t.id === task.id ? { ...t, title, description, completed } : t
        ));
        onClose(); // Close the popup after saving
    };

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
                        maxLength="487"
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

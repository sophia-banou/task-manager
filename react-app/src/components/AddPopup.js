import React, { useState , useRef, useEffect} from 'react';
import { useTaskContext } from '../TaskContext';
import '../css/AddPopup.css'; // Make sure to create this CSS file

const TaskPopup = ({ onClose }) => {
    const { addTask } = useTaskContext();
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleAddTask = () => {
        if (!taskTitle.trim()) return; // Prevent adding tasks without a title

        const newTask = {
            
            id: Date.now(),
            title: taskTitle,
            description: taskDescription,
            completed: false
        };
        addTask(newTask);
        setTaskTitle('');
        setTaskDescription('');
        onClose(); // Close the popup after adding the task
    };
    const titleInputRef = useRef(null);

    useEffect(() => {
        // Focus the input field when the component mounts
        if (titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, []);

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
                        ref={titleInputRef}
                    />
                </div>
                <div className="popup-middle">
                <textarea
                    type="text"
                    placeholder="Task description (optional)"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className='description'
                    maxLength="487"
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

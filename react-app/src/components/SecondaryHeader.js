import React, { useState } from 'react'
import '../css/SecondaryHeader.css'
import { useTaskContext } from '../TaskContext';
import TaskPopup from "./AddPopup";

const SecondaryHeader = () => {
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
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
        <div class="secondary-header">
            <button style={{ opacity: 0 }} class="toggle-sidebar" onclick="openNav()">&#9776; Open Sidebar</button>
            <button className="add-task" onClick={handleOpenPopup}>
                Add Task
                <img src="add.png" alt="Add Icon" className='add-icon' />
            </button>
            </div>
            {isPopupOpen && <TaskPopup onClose={handleClosePopup} />}
        </div>
    );

}

export default SecondaryHeader;
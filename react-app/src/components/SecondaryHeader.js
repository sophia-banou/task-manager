import React, { useState } from 'react'
import '../css/SecondaryHeader.css'
import TaskPopup from "./AddPopup";
import { useTaskContext } from '../TaskContext';

const SecondaryHeader = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { setIsSidebarOpen , isSidebarOpen} = useTaskContext();

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    return (
        <div>
        <div className={`secondary-header ${isSidebarOpen ? 'shifted' : ''}`}>
            {isSidebarOpen && <img src="sidebar-close.png" className="toggle-sidebar" onClick ={toggleSidebar}/>}
            {!isSidebarOpen && <img src="sidebar-open.png" className="toggle-sidebar" onClick ={toggleSidebar}/>}
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
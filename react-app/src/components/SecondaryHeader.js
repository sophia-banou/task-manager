import React, { useState } from 'react'
import '../css/SecondaryHeader.css'
import TaskPopup from "./AddPopup";
import { useTaskContext } from '../context/TaskContext';

const SecondaryHeader = () => {
    // State to manage popup visibility
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Get sidebar state from context
    const { setIsSidebarOpen , isSidebarOpen} = useTaskContext();

    // Function that opens the popup
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    // Function that closes the popup
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    // Function that toggles the sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    return (
        <div>
        <div className={`secondary-header ${isSidebarOpen ? 'shifted' : ''}`}>
            {isSidebarOpen && <img src="sidebar-close.png" alt="Sidebar Icon - Close" className="toggle-sidebar" onClick ={toggleSidebar}/>}
            {!isSidebarOpen && <img src="sidebar-open.png" alt="Sidebar Icon - Open" className="toggle-sidebar" onClick ={toggleSidebar}/>}
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
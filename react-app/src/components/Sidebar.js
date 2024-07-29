import React, {useState, useEffect} from 'react'
import '../css/Sidebar.css'
import {useTaskContext} from '../context/TaskContext';

const SideBar = () => {
    // Get the current filter and the state of the sidebar and tasks from context
    const { filter, setFilter, isSidebarOpen, tasks} = useTaskContext();

    // Function that handles filter changes
    const handleFilterClick = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    // Function that initializes task counts, based on filter
    const [taskCounts, setTaskCounts] = useState({
        all: 0,
        completed: 0,
        incomplete: 0,
    });

    // Change the task counts when there is a change in the tasks
    useEffect(() => {
        const allCount = tasks.length;
        const completedCount = tasks.filter(task => task.completed).length;
        const incompleteCount = tasks.filter(task => !task.completed).length;

        setTaskCounts({
            all: allCount,
            completed: completedCount,
            incomplete: incompleteCount,
        });
    }, [tasks]);

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className='filters'>
                <div className='head-filters'>Filters</div>
                <div className={`filter ${filter === 'All' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('All')}>
                    All
                    <span className='filter-count'>{taskCounts.all} </span>
                </div>
                <div
                    className={`filter ${filter === 'Incomplete' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('Incomplete')}> 
                    Incomplete
                    <span className='filter-count'>{taskCounts.incomplete} </span>
                </div>
                <div
                    className={`filter ${filter === 'Complete' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('Complete')}>
                    Complete
                    <span className='filter-count'>{taskCounts.completed} </span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
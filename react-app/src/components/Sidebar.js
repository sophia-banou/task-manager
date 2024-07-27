import React, { useContext } from 'react'
import '../css/Sidebar.css'
import {useTaskContext} from '../TaskContext';

const SideBar = () => {
    const { filter, setFilter } = useTaskContext();

    const handleFilterClick = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    return (
        <div class="sidebar" id="sidebar">
            <div className='filters'>
                <div className='head-filters'>Filters</div>
                <div className={`filter ${filter === 'All' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('All')}>
                    All
                </div>
                <div
                    className={`filter ${filter === 'Incomplete' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('Incomplete')}
                > Incomplete</div>
                <div
                    className={`filter ${filter === 'Complete' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('Complete')}
                >Complete</div>
            </div>
        </div>
    );
};

export default SideBar;
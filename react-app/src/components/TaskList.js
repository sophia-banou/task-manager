import React, { useState } from 'react';
import '../css/TaskList.css';
import TaskListItem from './TaskListItem';
import { useTaskContext } from '../context/TaskContext';
import TaskEditPopup from './EditPopup';

const TaskList = () => {

    // Get filteredTasks, the current filter, the function toggleTaskCompletion 
    // and the state of the tasks and the sidebar from context
    const { filteredTasks, toggleTaskCompletion, tasks,filter, isSidebarOpen } = useTaskContext();

    // Initialize editTask, which is the task that is going to be edited
    const [editTask, setEditTask] = useState(null);

    // Filter tasks based on their completion status
    const completedTasks = filteredTasks.filter(task => task.completed);
    const incompleteTasks = filteredTasks.filter(task => !task.completed);


    // Function that opens the editing popup and updates the state of the editTask
    const handleEditClick = (task) => {
        setEditTask(task);
    };

    // Function that closes the editing popup and updates the state of the editTask
    const handleClosePopup = () => {
        setEditTask(null);
    };

    return (
        <div className={`main-div ${isSidebarOpen ? 'shifted' : ''}`}>
            <div className="title-div">
                <h2 className='title'>Tasks</h2>
            </div>
            {tasks.length === 0 ? (
                <div className='no-tasks-div'>
                    <div className="no-tasks">
                        <div className='no-tasks-text'>
                            <span className='nt-title' style={{fontSize: '40px'}}>No Tasks Available</span>
                            <p style={{fontSize: '30px'}}>It looks like you don't have any tasks yet. Create your first task to get started!</p>
                        </div>
                        <img src="illustration.png" alt="Illustration" className='illustration'></img>
                    </div>
                </div>
            ) : (
                <div className='tasks-div'>
                    {(filter === 'All' || filter === 'Incomplete') && (
                        <div className={`tasks-container ${isSidebarOpen ? 'shifted' : ''}`}>
                            <div className="tasks-header">
                                <h2>Incomplete Tasks</h2>
                            </div>
                            <ul className="tasks-list">
                                {incompleteTasks.map(task => (
                                    <TaskListItem key={task.id} task={task} onCheckboxChange={toggleTaskCompletion} onEditClick={handleEditClick} />
                                ))}
                            </ul>
                        </div>
                    )}

                    {(filter === 'All' || filter === 'Complete') && (
                        <div className={`tasks-container ${isSidebarOpen ? 'shifted' : ''}`}>
                            <div className="tasks-header">
                                <h2>Completed Tasks</h2>
                            </div>
                            <ul className="tasks-list">
                                {completedTasks.map(task => (
                                    <TaskListItem key={task.id} task={task} onCheckboxChange={toggleTaskCompletion} onEditClick={handleEditClick} />
                                ))}
                            </ul>
                        </div>
                    )}
                    {
                        editTask && (
                            <TaskEditPopup
                                task={editTask}
                                onClose={handleClosePopup}
                            />
                        )
                    }
                </div>

            )}
        </div>
       
    );
};

export default TaskList;

import React, { useState } from 'react';
import '../css/TaskList.css';
import TaskListItem from './TaskListItem';
import { useTaskContext } from '../TaskContext'; // Ensure correct path
import TaskEditPopup from './EditPopup';

const TaskList = () => {
    const { filteredTasks, toggleTaskCompletion, filter } = useTaskContext();
    const [editingTask, setEditingTask] = useState(null);

    // Filter tasks based on their completion status
    const completedTasks = filteredTasks.filter(task => task.completed);
    const incompleteTasks = filteredTasks.filter(task => !task.completed);

    const handleEditClick = (task) => {
        setEditingTask(task);
    };

    const handleClosePopup = () => {
        setEditingTask(null);
    };

    return (
        <div className="main-div">
            <div className="title-div">
                <h2 className='title'>Tasks</h2>
            </div>
            {filteredTasks.length === 0 ? (
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

                    {/* Conditionally render the incomplete tasks section */}
                    {(filter === 'All' || filter === 'Incomplete') && (
                        <div className="tasks-container">
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

                    {/* Conditionally render the completed tasks section */}
                    {(filter === 'All' || filter === 'Complete') && (
                        <div className="tasks-container">
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
                        editingTask && (
                            <TaskEditPopup
                                task={editingTask}
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

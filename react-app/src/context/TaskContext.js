import React, { createContext, useState, useContext, useEffect } from 'react';

const TaskContext = createContext();

export const TaskProvider = props => {
    // Initialize tasks state, load from localStorage if available.
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    // State to control the sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
   
    // State to control the current filter for the tasks
    const [filter, setFilter] = useState('All');

    // Filtered tasks based on current filter
    const filteredTasks = tasks.filter(task => {
        if (filter === 'All') return true;
        if (filter === 'Incomplete') return !task.completed;
        if (filter === 'Complete') return task.completed;
        return false;
    });

    // Save tasks to localStorage whenever tasks state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Function to toggle the completion status of a task
    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const value = {
        tasks,
        setTasks,
        filter,
        setFilter,
        filteredTasks,
        toggleTaskCompletion,
        isSidebarOpen,
        setIsSidebarOpen,
    };

    return (
        <TaskContext.Provider value={value}>
            {props.children}
        </TaskContext.Provider>
    );
};

// Custom hook to use the TaskContext in components
export const useTaskContext = () => useContext(TaskContext);

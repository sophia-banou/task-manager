import React, { createContext, useState, useContext, useEffect } from 'react';

const TaskContext = createContext();

export const TaskProvider = props => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   
    const [filter, setFilter] = useState('All');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'All') return true;
        if (filter === 'Incomplete') return !task.completed;
        if (filter === 'Complete') return task.completed;
        return false;
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

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

export const useTaskContext = () => useContext(TaskContext);

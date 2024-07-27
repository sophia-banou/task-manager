import React, { createContext, useState, useContext} from 'react';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');
    

    const addTask = (task) => {
        setTasks(prevTasks => [...prevTasks, task]);
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'All') return true;
        if (filter === 'Incomplete') return !task.completed;
        if (filter === 'Complete') return task.completed;
        return false;
    });

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };
    
    return (
        <TaskContext.Provider value={{ tasks, setTasks, filter, setFilter, filteredTasks, addTask, toggleTaskCompletion  }}>
            {children}
        </TaskContext.Provider>
    );
};
import React, { createContext, useContext } from 'react';
import { useTaskManager } from '../viewModels/TaskManager';
import Task from '../models/Task';

interface TaskContextType {
    tasks: Task[];
    getTasks: () => Task[];
    getTask: (id: string) => Task | undefined;
    setTask: (task: Task) => void;
    addTask: (task: Task) => void;
    deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const taskManager = useTaskManager();
    
    return (
        <TaskContext.Provider value={taskManager}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};

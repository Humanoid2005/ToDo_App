import React from "react";
import Task from "../models/Task";

export const useTaskManager = () => {
    const [tasks, setTasks] = React.useState<Task[]>([]);

    const getTasks = () => {
        return tasks;
    }

    const getTask = (id: string) => {
        return tasks?.find((task: Task) => task.getId() === id);
    }

    const setTask = (task: Task) => {
        setTasks(prevTasks =>
            prevTasks.map(prevTask =>
                prevTask.getId() === task.getId() ? task : prevTask
            )
        );
    }

    const addTask = (task: Task) => {
        setTasks(prevTasks => [...prevTasks, task])
    }

    const deleteTask = (id: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.getId() !== id));
    }

    return {
        tasks,
        getTasks,
        getTask,
        setTask,
        addTask,
        deleteTask
    };
}
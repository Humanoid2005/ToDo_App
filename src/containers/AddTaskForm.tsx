import React from "react";
import Task from "../models/Task";
import { useTaskContext } from "../contexts/TaskContext";
import '../styles/AddTaskForm.css';

interface AddTaskFormProps {
    onTaskAdded?: () => void;
}

export default function AddTaskForm({ onTaskAdded }: AddTaskFormProps){
    const [task,setTask] = React.useState<Task>(new Task("","",false,new Date(),""));
    const { addTask } = useTaskContext();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTask(prevTask => {
            return new Task(
                name === "id" ? value : prevTask.getId(),
                name === "name" ? value : prevTask.getName(),
                name === "status" ? value === "true" : prevTask.getStatus(),
                name === "deadline" ? new Date(value) : prevTask.getDeadline(),
                name === "description" ? value : prevTask.getDescription()
            );
        });
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        // Create a new task with generated ID
        const newTask = new Task(
            Math.random().toString(36).substring(2, 15),
            task.getName(),
            task.getStatus(),
            task.getDeadline(),
            task.getDescription()
        );
        
        console.log("Adding task:", newTask.getName(), newTask.getId());
        addTask(newTask);
        setTask(new Task("", "", false, new Date(), ""));
        
        // Call the callback to close the form
        if (onTaskAdded) {
            onTaskAdded();
        }
    };

    function formatDateForInput(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Task Name: </label>
            <input
                type="text"
                onChange={handleInputChange}
                name="name"
                value={task.getName()}
            />
            <label htmlFor="description">Task Description: </label>
            <input
                type="text"
                onChange={handleInputChange}
                name="description"
                value={task.getDescription()}
            />
            <label htmlFor="deadline">Task Deadline: </label>
            <input
                type="datetime-local"
                onChange={handleInputChange}
                name="deadline"
                value={formatDateForInput(task.getDeadline())}
            />

            <button type="submit">Create Task</button>
        </form>
    );
}
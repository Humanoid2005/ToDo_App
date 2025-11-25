import React, { useEffect } from "react";
import AddTaskForm from "../containers/AddTaskForm";
import TaskCard from "../containers/TaskCard";
import { useTaskContext } from "../contexts/TaskContext";
import '../styles/ToDo_Page.css';

export default function TodoPage() {
    const { tasks } = useTaskContext();
    const [createTask, setCreateTask] = React.useState(false);

    const handleTaskAdded = () => {
        setCreateTask(false);
    };

    useEffect(() => {
        console.log("Tasks updated:", tasks.length);
    },[tasks])

    return (
        <div className="todo-page">
            <h1>Todo List</h1>

            {createTask ? (
                <AddTaskForm onTaskAdded={handleTaskAdded} />
            ) : (
                <button className="create-task-button" onClick={() => setCreateTask(!createTask)}>
                    Add Task
                </button>
            )}
            <div className="todo-list">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskCard key={task.getId()} task={task} />
                    ))
                ) : (
                    <p>No tasks yet. Add one to get started!</p>
                )}
            </div>
        </div>
    );
}
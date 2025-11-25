import React from "react";
import Task from "../models/Task";
import { useTaskContext } from "../contexts/TaskContext";
import '../styles/TaskCard.css';

interface TaskCardProps{
    task:Task;
}

function checkStrikeOut(data: any, status?: boolean) {
    if (status) {
        return <s>{data}</s>;
    }
    return <>{data}</>;
}

export default function TaskCard({task}:TaskCardProps){

    const [editMode, setEditMode] = React.useState(false);
    const [edittedTask, setEdittedTask] = React.useState<Task>(task);
    const { setTask, deleteTask } = useTaskContext();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEdittedTask(prevTask => {
            return new Task(
                name === "id" ? value : prevTask.getId(),
                name === "name" ? value : prevTask.getName(),
                name === "status" ? value === "true" : prevTask.getStatus(),
                name === "deadline" ? new Date(value) : prevTask.getDeadline(),
                name === "description" ? value : prevTask.getDescription()
            );
        });
    }

    const handleUpdate = () => {
        setTask(edittedTask);
        setEditMode(false);
    };

    function handleCompleted(){
        const updatedTask = new Task(
            task.getId(), 
            task.getName(), 
            !task.getStatus(), // Toggle the status
            task.getDeadline(), 
            task.getDescription()
        );
        setTask(updatedTask);
    }

    function handleDelete(){
        deleteTask(task.getId());
    }

    function formatDateForInput(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }


    return (
        <>
        <div className="task-card">
            <div className="task-actions">
                {editMode==false?<button onClick={()=>{setEditMode(!editMode)}}>Edit Task</button>:<button onClick={()=>{setEditMode(!editMode)}}>Cancel Edit</button>}
            </div>
            {editMode==false?
            <>
                <h3>{checkStrikeOut(task.getName(),task.getStatus())}</h3>
                <p>{checkStrikeOut(task.getDescription(),task.getStatus())}</p>
                <h4><b>Deadline: </b>{checkStrikeOut(task.getDeadline().toLocaleDateString() + " " + task.getDeadline().toLocaleTimeString(),task.getStatus())}</h4>
                <p> <b>Status: {task.getStatus()==true?"Completed":"Pending"}</b></p>
                <div className="task-actions">
                    {!task.getStatus() && <button onClick={handleCompleted}>Mark Completed</button>}
                    <button onClick={handleDelete}>Delete Task</button>
                </div>
            </>:
            <>
                <label htmlFor="name">Task Name: </label>
                <input
                    type="text"
                    onChange={handleInputChange}
                    name="name"
                    value={edittedTask.getName()}
                />
                <label htmlFor="description">Task Description: </label>
                <input
                    type="text"
                    onChange={handleInputChange}
                    name="description"
                    value={edittedTask.getDescription()}
                />
                <label htmlFor="deadline">Task Deadline: </label>
                <input
                    type="datetime-local"
                    onChange={handleInputChange}
                    name="deadline"
                    value={formatDateForInput(edittedTask.getDeadline())}
                />
                <button onClick={handleUpdate}>Update Task</button>
            </>
            }
        </div>
        </>
    )
}
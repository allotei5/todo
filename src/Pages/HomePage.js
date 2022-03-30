import React from 'react'
import { useState, useEffect } from 'react'
import { TaskForm } from '../components/TaskForm/TaskForm';
import { Tasks } from '../components/Tasks/Tasks'

export const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [isFormModalOpen, setFormModal] = useState(false);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        }

        getTasks();
    }, [])

    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/TaskCollection");
        const data = await res.json();
        return data;
    }

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/TaskCollection/${id}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const displayFormModal = () => {
        setFormModal(true);
    }

    const closeFormModal = () => {
        setFormModal(false);
    }

    const addTask = async (task) => {
        console.log(task);

        const res = await fetch("http://localhost:5000/TaskCollection", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json();
        setTasks([...tasks, data])
    }

  return (
    <div className='custom-container' style={{marginTop: "15px"}}>
        <h2>TODO APP</h2>
        <div>
            <button type="button" className="btn btn-primary" style={{marginBottom: "15px"}} onClick={() => displayFormModal()}>Add New Task</button>
            <TaskForm show={isFormModalOpen} onHide={closeFormModal} onAdd={addTask}/>
            <Tasks tasks={tasks} onDelete={deleteTask}/>
        </div>
    </div>
  )
}

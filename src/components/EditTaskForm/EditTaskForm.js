import { useState, useEffect } from 'react'

export const EditTaskForm = ({ task, editTask, onHide }) => {
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const editedTask = {
            id: task.id,
            title: task.title,
            description: task.description,
            taskCategoryId: task.taskCategoryId,
            status,
            comments: [...task.comments, {
                message,
                created_on: new Date().toDateString(),
                updated_on: new Date().toDateString()
            }]
        }

        editTask(editedTask);
        setMessage("");
        onHide();
    }

  return (
    <form onSubmit={onSubmit}>
        <div>Status:</div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked={(task.status === 'uncompleted') ? true : false} onChange={(e) => setStatus('uncompleted')} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Uncompleted
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked={(task.status === 'completed') ? true : false} onChange={(e) => setStatus('completed')} />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                Completed
            </label>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter new message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e) => setMessage(e.target.value)} rows="3"></textarea>
        </div>
        <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
  )
}

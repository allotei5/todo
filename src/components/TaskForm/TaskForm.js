import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import { useState, useEffect } from "react";
import { CategoryOption } from "../CategoryOption/CategoryOption";

export const TaskForm = ({show, onHide, onAdd}) => {

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [category, setCategory] = useState(0);
    const [date, setDate] = useState("");
    const [comment, setComment] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({
            title: taskName,
            description: taskDescription,
            status: "uncompleted",
            taskCategoryId: category,
            dateStarted: new Date().toDateString(),
            dateEnded: date,
            comments: (comment !== "") ? [{
                message : comment,
                created_on: new Date().toDateString(),
                updated_on: new Date().toDateString()
            }] : []
        });
        setTaskName("");
        setTaskDescription("");
        setCategory("");
        setDate("");
        setComment("");
        onHide();
    }

  return (
    <div>
        <Modal show={show}>
            <ModalHeader>
                <ModalTitle>Add New Task</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Task Name</label>
                        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}  className="form-control" id="exampleFormControlInput1" placeholder="Finish this app" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e) => setTaskDescription(e.target.value)} value={taskDescription} rows="3"></textarea>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                        <select className="form-select" id="inputGroupSelect01" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option>Choose...</option>
                            <CategoryOption />
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Due By</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Comments</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e) => setComment(e.target.value)} value={comment} rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit">Add new task</button>
                </form>
            </ModalBody>
            <ModalFooter>
            <button type="button" className="btn btn-secondary" onClick={() => onHide()}>Close</button>
          </ModalFooter>
        </Modal>
    </div>
  )
}

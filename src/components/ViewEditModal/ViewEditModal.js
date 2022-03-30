import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { EditTaskForm } from "../EditTaskForm/EditTaskForm";

export const ViewEditModal = ({ show, onHide, task, editTask }) => {
    
  return (
    <>
        <Modal show={show}>
            <ModalHeader>
                <ModalTitle>Edit {task.title}</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <EditTaskForm task={task} editTask={editTask} onHide={() => onHide()}/>
            </ModalBody>
            <ModalFooter>
            <button type="button" className="btn btn-secondary"  onClick={() => onHide()}>Close</button>
            </ModalFooter>
        </Modal>
    </>
  )
}

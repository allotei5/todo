import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export const ViewTaskModal = ({show, onHide, task}) => {
  return (
    <>
        <Modal show={show}>
            <ModalHeader>
                <ModalTitle>{task.title}</ModalTitle>
            </ModalHeader>
            <ModalBody>
                {task.description}
            </ModalBody>
            <ModalFooter>
            <button type="button" className="btn btn-secondary"  onClick={() => onHide()}>Close</button>
          </ModalFooter>
        </Modal>
    </>
  )
}

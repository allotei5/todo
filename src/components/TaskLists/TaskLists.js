import React, { useState } from 'react'
import { AiFillEye, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { ViewTaskModal } from '../ViewTaskModal/ViewTaskModal';

export const TaskLists = ({task, onDelete}) => {

  const [isViewModalOpen, setViewModal] = useState(false);
  const showViewModal = () => {
    setViewModal(true);
  }
  const hideViewModal = () => {
    console.log('false')
    setViewModal(false);
  }

  return (
    <div style={{height: "75px", backgroundColor: "#F8F9FA", borderRadius: "5px", padding: "25px", marginBottom: "10px"}}>
        <div className='row'>
          <div className="col-9">
            {task.title}
          </div>
          <div className="col icons">
            <AiFillEye color='blue' onClick={() => showViewModal()}/>
            <ViewTaskModal show={isViewModalOpen} onHide={hideViewModal} task={task}/>
            <AiFillEdit color='green' />
            <AiFillDelete color='red' onClick={() => onDelete(task.id)} />
          </div>
        </div>
    </div>
  )
}

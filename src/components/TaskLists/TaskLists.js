import React, { useState } from 'react'
import { AiFillEye, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { ViewEditModal } from '../ViewEditModal/ViewEditModal';
import { ViewTaskModal } from '../ViewTaskModal/ViewTaskModal';

export const TaskLists = ({task, onDelete, editTask}) => {

  const [isViewModalOpen, setViewModal] = useState(false);
  const [isEditModalOpen, setEditModal] = useState(false);

  const showViewModal = () => {
    setViewModal(true);
  }

  const showEditModal = () => {
    setEditModal(true)
  }

  const hideViewModal = () => {
    console.log('false')
    setViewModal(false);
  }

  const hideEditModal = () => {
    setEditModal(false);
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
            <AiFillEdit color='green' onClick={() => showEditModal()} />
            <ViewEditModal show={isEditModalOpen} onHide={hideEditModal} task={task} editTask={editTask}/>
            <AiFillDelete color='red' onClick={() => onDelete(task.id)} />
          </div>
        </div>
    </div>
  )
}

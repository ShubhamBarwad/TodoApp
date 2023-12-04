import React from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'
import Modal from './Modal';

function Contianer() {
  const modalState = useSelector(state => state.button.modalIsOpen);
  return (
    <div>
        <div className='container mx-auto'>
          <div className='flex justify-center items-center my-5'>
            <Button buttonType={'setModal'} text={'add task'}/>
          </div>
        </div>
        <Modal modalState={modalState} modalType={'newtask'}/>
    </div>
  )
}

export default Contianer
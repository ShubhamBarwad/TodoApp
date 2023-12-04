import React from 'react'
import NewTask from './NewTask'

function Modal( {modalState, modalType} ) {
  return (
    <>
        {modalState && <div className='w-full h-full left-0 top-0 absolute flex justify-center items-center backdrop-blur-sm border'>
            {modalType==='newtask' && <NewTask/>}
        </div>}
    </>
  )
}

export default Modal
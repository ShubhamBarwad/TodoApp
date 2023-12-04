import React from 'react'
import { useDispatch } from 'react-redux'
import { setModalState, submitData } from '../features/slice/buttonSlice'

function Button({ buttonType, text }) {
    const dispatch = useDispatch();

    const handleClick = (value) => {
        if(value === 'setModal'){
            dispatch(setModalState());
        }else if(value === 'submit'){
            dispatch(submitData('/addtask'));
        }
    }

  return (
    <button className='border bg-black px-4 py-1 rounded-md text-gray-200 uppercase text-lg' onClick={() => handleClick(buttonType)}>{text}</button>
  )
}

export default Button
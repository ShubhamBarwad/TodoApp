import React from 'react'
import InputText from './InputText'
import { useDispatch } from 'react-redux';
import { setModalState } from '../features/slice/buttonSlice';
import Button from './Button';

function NewTask() {
    const modalName = 'New Task';
    const dispatch = useDispatch();
    const formFields = [
        {
            name: 'task name',
            input: 'input',
            type: 'text'
        },
        {
            name: 'task description',
            input: 'textarea',
        },
        {
            name: 'task status',
            input: 'select',
            options: ['pending', 'inprogress', 'review', 'done']
        }
    ]
  return (
    <div className=' max-w-xl h-min w-full bg-white shadow-md p-10 relative'>
        <p className='text-center text-xl mb-5'>{modalName}</p>
        <form  className='flex flex-col items-stretch justify-center gap-4'>
            {formFields.map(formField=> (
                 <InputText key={formField.name} field={formField}/>   
            ))}
            <Button buttonType={'submit'} text={'submit'} />
        </form>
        <div className='absolute top-2 right-2 cursor-pointer' onClick={()=> dispatch(setModalState())}>
            <span className="material-symbols-outlined">close</span>
        </div>
    </div>
  )
}

export default NewTask
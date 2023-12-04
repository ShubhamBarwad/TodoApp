import React from 'react'

function InputText( {field} ) {
  return (
    <>
      {field.input === 'input' && <input type={field.type} className='form-fields' name={field.name} placeholder={field.name} />}
      {field.input === 'textarea' && <textarea className='form-fields' name={field.name} placeholder={field.name} />}
      {field.input === 'select' &&
        <select className='form-fields' name={field.name}>
          {field.options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      }
    </>
  )
}

export default InputText
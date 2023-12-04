import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'

function Header() {
  return (
    <div className='shadow-md'>
        <div className='container mx-auto flex justify-between px-3 py-3 items-center'>
            <Logo />
            <Searchbar />
        </div>
    </div>
  )
}

export default Header
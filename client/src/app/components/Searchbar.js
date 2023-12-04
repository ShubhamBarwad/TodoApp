'use client'
import React, { useState,useEffect } from 'react'

function Searchbar() {
    const tempData=['java', 'javascript', 'c++', 'c', 'pyhton', 'magento', 'php', 'mysql', 'mongodb', 'react', 'express', 'react native'];
    const [resultList, setResultList] = useState([]);

    const filterResult = (e) => {
        const value = e.target.value;
        if(value){
            setResultList(tempData.filter((el) => el.includes(value)));
        }else setResultList([]);
    }
    const closeResult = () => {
        setResultList([]);
    }
    
    
    return (
        <>
            <div className='relative z-20'>
                <div>
                    <div className='flex items-stretch'>
                        <input className='border rounded-tl-md rounded-bl-md p-1' type='text' placeholder='Search...' onChange={filterResult} onClick={filterResult}/>
                        <button className='flex items-center bg-black px-1 rounded-br-md rounded-tr-md'><span className="material-symbols-outlined text-white">search</span></button>
                    </div>
                </div>
                {Boolean(resultList.length) && <div className='border shadow-md absolute w-full bg-white'>
                    {resultList.map(el => (
                        <p key={el} className='px-2'>{el}</p>
                    ))}
                </div>}
            </div>
            {Boolean(resultList.length) && <div className='w-full h-full absolute top-0 right-0 z-10' onClick={closeResult}>

            </div>}
        </>
    )
}

export default Searchbar
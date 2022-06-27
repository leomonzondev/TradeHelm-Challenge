import React, { useState } from 'react'



export const AddTask = ({props}:any) => {


    const { showAdd, setShowAdd, tasks, setTasks } = props


    const handleClose = () => {
        setShowAdd(false)
    }

    const buttonStyle = 'px-16 py-3 rounded-sm'

    const [inputValue, setInputValue] = useState('')

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
    }

    const handleAddItem = (e: React.FormEvent<HTMLFormElement>| React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        e.preventDefault()
        if(inputValue.trim().length > 3) {
            setTasks([...tasks,{id:Math.random(), task:inputValue}])
            handleClose()
        }

    }

  return (
    <div className='absolute w-full h-full bg-white/70 flex justify-center items-center'>

        <div className=' p-5 bg-white drop-shadow-lg rounded-md flex flex-col items-center'>
            <form onSubmit={(e) => handleAddItem(e)}>
                <input onChange={(e) => handleInput(e)} value={inputValue} className='w-96 focus:outline-blue-400 p-3' placeholder='Writes here the item' />
            </form>
            <div className='flex gap-4 mt-4 font-medium'>
                <button className={`${buttonStyle} bg-gray-200`} onClick={handleClose}>Close</button>
                <button className={`${buttonStyle} bg-blue-400 text-white`} onClick={(e) => handleAddItem(e )}>Add </button>
            </div>
        </div>

    </div>
  )
}


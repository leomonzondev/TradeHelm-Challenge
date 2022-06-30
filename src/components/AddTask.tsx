import React, { useEffect, useState } from 'react'
import { showAdd, task } from '../../pages';



export type props = {
    showAdd: {
        active: boolean;
        id: number;
    };
    tasks:[{
        id: number,
        task: string
    }];
    setShowAdd:React.Dispatch<React.SetStateAction<showAdd>>;
    setTasks:React.Dispatch<React.SetStateAction<task[]>>;
}

type inProp = {
  
    showAdd: {
        active: boolean;
        id: number;
    };
    tasks:task[];
    setShowAdd:React.Dispatch<React.SetStateAction<showAdd>>;
    setTasks:React.Dispatch<React.SetStateAction<task[]>>;
    
}


export const AddTask = ({showAdd,tasks,setShowAdd,setTasks,}:inProp) => {

    const handleClose = () => {
        setShowAdd({ id:0 ,active: false})
        console.log(showAdd)
    }

    const [updateState, setUpdateState] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {

        if(showAdd.id != 0) {
            const getTask = tasks.find(task => task.id === showAdd.id)
            setUpdateState(true)
            return setInputValue(getTask!.task)
        }
    },[])

    const buttonStyle = 'px-16 py-3 rounded-sm'


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
    }

    const handleAddItem = (e: React.FormEvent<HTMLFormElement>| React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        e.preventDefault()
        const getTask = tasks.find(task => task.id === showAdd.id)

        if (!updateState) {
            if(inputValue.trim().length > 3) {
                setTasks([...tasks,{id:Math.random(), task:inputValue, complete: false}])
                handleClose()
            }
        } else {
            const newArr = tasks.map(task => {
                if (task.id === showAdd.id ){
                return {...task, id:task.id, task: inputValue}
            }
            return task }) 
        setTasks(newArr)
        handleClose()
        }
    }

  return (
    <div className='absolute w-full h-full bg-white/70 flex justify-center items-center'>

        <div className=' p-5 bg-white drop-shadow-lg rounded-md flex flex-col '>
        {
            showAdd.id != 0
            ? <p className='font-bold text-2xl'>Update item</p>
            : ""
        }
            <form onSubmit={(e) => handleAddItem(e)}>
                <input autoFocus onChange={(e) => handleInput(e)} value={inputValue} className='w-96 focus:outline-blue-400 p-3' placeholder='Writes here the item' />
            </form>
            <div className='flex gap-4 mt-4 font-medium'>
                <button className={`${buttonStyle} bg-gray-200`} onClick={handleClose}>Close</button>
                <button className={`${buttonStyle} bg-blue-400 text-white`} onClick={(e) => handleAddItem(e )}>{updateState ? "Update" : "Add"} </button>
            </div>
        </div>

    </div>
  )
}


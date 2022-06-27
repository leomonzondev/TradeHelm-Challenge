import React from 'react'
import { TiEdit } from 'react-icons/ti'

export const Task = ({item, taskProps}:any) => {


  const { handleDelete, showAdd, setShowAdd } = taskProps

  const handleUpdate = () => {

    setShowAdd(true)


  }



  return (
    <div className='flex bg-white w-full py-3 px-4 justify-between'>
        <p className='font-bold text-2xl'>{item.task}</p>
        <div className='flex gap-2 items-center'>
          <div className='cursor-pointer hover:text-blue-600' onClick={handleUpdate}>
            <TiEdit size={22} />
          </div>
          <button className='italic hover:text-red-600 ' onClick={() => handleDelete(item.id)} >delete</button>
        </div>
    </div>
  )
}

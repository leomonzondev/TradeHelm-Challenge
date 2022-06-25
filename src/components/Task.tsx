import React from 'react'

export const Task = ({item, handleDelete}) => {






  return (
    <div className='flex bg-white w-full py-3 px-4 justify-between'>
        <p className='font-bold'>{item.task}</p>
        <button className='italic' onClick={() => handleDelete(item.id)} >delete</button>
    </div>
  )
}

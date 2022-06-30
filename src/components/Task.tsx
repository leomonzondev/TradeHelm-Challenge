
import React, { SetStateAction } from 'react'
import { TiEdit } from 'react-icons/ti'
import { showAdd, task } from '../../pages'
import { props } from './AddTask';




export type Tasktype = {
  item: task;
  setShowAdd:React.Dispatch<React.SetStateAction<showAdd>>;
  handleDelete:(id:number) => void;
  setTasks:React.Dispatch<SetStateAction<task[]>>;
  tasks:task[];
  showAdd: {
    active: boolean;
    id: number;
};
}


export const Task = ({item, setShowAdd, showAdd, handleDelete, setTasks, tasks }:Tasktype) => {



  const handleUpdate = () => {
    setShowAdd({active: true, id:item.id})
  }

  const handleComplete = () => {


    const updateComplete = tasks.map(task => {if(task.id === item.id){
      return {...item, complete: !item.complete}
    }
    return task
  } )

    setTasks(updateComplete)
    
  }



  return (
    <div className={`flex bg-white w-full py-3 px-4 justify-between hover:bg-gray-200 hover:cursor-pointer }`}>
      <div className='w-full' onClick={handleComplete}>
        <p className={`font-bold text-2xl ${item.complete ? "line-through" : ""}`}  >{item.task}</p>

      </div>
        <div className='flex gap-2 items-center'>
          <div className='cursor-pointer hover:text-blue-600' onClick={handleUpdate}>
            <TiEdit size={22} />
          </div>
          <button className='italic hover:text-red-600 ' onClick={() => handleDelete(item.id)} >delete</button>
        </div>
    </div>
  )
}

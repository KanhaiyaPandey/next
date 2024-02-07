import prisma from '@/utils/db'
import Link from 'next/link'
import React from 'react'
import DeleteForm from './DeleteForm'
import { getAllTasks } from '@/utils/actions'

const TaskList = async () => {
    const tasks = await getAllTasks();

    if(tasks.length === 0){
        return <h1 className='mt-8 font-medium text-xl'>No task to show</h1>
    }
  return (
    <ul className='mt-8'>
        {tasks.map((task) =>{
           return ( <li key={task.id} className=' flex justify-between items-center px-6 py-4 
            mb-4 border border-base-300 shadow-lg rounded-lg'>
                <h2 className={`text-lg capitalize ${task.completed? ' line-through': null }`}>
                    {task.content}
                </h2>
                <div className='flex gap-6 items-center'>
                   <Link href={`tasks/${task.id}`} className='btn btn-accent btn-xs'>
                    edit
                   </Link>
                   <DeleteForm id={task.id}/>
                </div>
            </li>
           )
        })}
    </ul>
  )
}

export default TaskList
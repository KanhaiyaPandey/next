import { createTask } from "@/utils/actions"

const TaskForm = () => {
  return (
   <form action={createTask}>
    <div className=' join w-full'>
      <input type="text" className='w-full input input-bordered join-item' placeholder='type here'
      name='content' required />
      <button className='btn btn-primary join-item'>
        create task
      </button>
    </div>
   </form>
  )
}

export default TaskForm
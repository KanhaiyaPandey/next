import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

const createTask = async ( formData) =>{
       "use server"
       const content = formData.get('content');
       await prisma.task.create({
         data:{
          content
         }
       });

       revalidatePath("/tasks")
}

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
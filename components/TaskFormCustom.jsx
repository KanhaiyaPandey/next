"use client"

import { createTaskCustom } from "@/utils/actions"
import { useEffect } from "react";
import { useFormStatus , useFormState} from 'react-dom';
import toast from "react-hot-toast";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='btn join-item btn-primary'
      disabled={pending}
    >
      {pending ? 'please wait... ' : 'create task'}
    </button>
  );
};

const initialState = {
  message: null
}


const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {

       if(state.message === "error"){
        toast.error("there is an error")
        return;
       }

     if (state.message) {
        toast.success('task created....');
      }

  }, [state])

  return (
    <form action={formAction}>
    {/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}
    <div className=' join w-full'>
      <input type="text" className='w-full input input-bordered join-item' placeholder='type here'
      name='content' required />
     <SubmitButton/>
    </div>
   </form>
  )
}

export default TaskFormCustom
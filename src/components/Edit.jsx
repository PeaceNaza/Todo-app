/* eslint-disable react/prop-types */
import { useState } from "react"

//Props from TodoItemlist
const Edit = ({editTodo, task,}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    //prevent the default action of the form
    e.preventDefault();
    
    //edit todo 
    if (value) {
      editTodo(value, task.id); //edit todo
      
      setValue();//clear the input field after submitting
    }  
  }

  return (
     <form  className="ml-5 mb-3 text-xs text-wrap" onSubmit={handleSubmit}>

        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Edit task" className="placeholder:text-indigo-950 placeholder:text-xs p-2 min-w-[300px] rounded-md outline-none" />

        <button type="submit" onClick={handleSubmit} className="ml-2 p-2 text-white bg-indigo-950 rounded-md">Add Task</button>
     </form>

  )
}

export default Edit
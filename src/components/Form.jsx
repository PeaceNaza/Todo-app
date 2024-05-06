/* eslint-disable react/prop-types */
import { useState } from 'react'

//props coming from todolist
const Form = ({addTodo}) => { 
  
  const [value, setValue] = useState("");
   
  const handleSubmit = (e) => {
    //prevent the default action of the form
    e.preventDefault();
     if (value) {
      //call the function addTodo from todolist component and pass the value as an argument
      addTodo(value); //add todo

      //clear the input field after submitting
      setValue("");
     }

  };


  return (
   <div>
     <form className="lg:ml-5 mb-2 text-xs" onSubmit={handleSubmit}>
        
        <input type="text" placeholder="Add a task you want to accomplish" className="placeholder:text-indigo-950 lg:placeholder:text-sm p-2 lg:w-[350px] sm:w-[200px] h-8 rounded-md outline-none mt-6 shadow" value={value} onChange={(e) => setValue(e.target.value)} />

<button type="submit" className="ml-2 p-2 text-white bg-indigo-950 rounded-md sm:text-wrap shadow">Add Task</button>
        
        

     </form>
     </div>
  )
}

export default Form
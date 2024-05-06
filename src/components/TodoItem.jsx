/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

//props from todolist
const TodoItem = ({task, deleteTodo, editTodo}) => {

  return (
    <div className="container flex justify-between items-center bg-indigo-950 text-xs text-white p-2 rounded-md text-wrap mt-5 ml-4 w-[425px] h-10">
      <div className="">
        <input type="checkbox"/>
          <label className="ml-2">{task.task}</label>
      </div>
      
      <div>
         <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />

         <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className="mr-5 ml-5" />

      </div>
    </div>
  )
} 

export default TodoItem
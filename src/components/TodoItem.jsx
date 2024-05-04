/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

//props from todolist
const TodoItem = ({task, deleteTodo, editTodo, toggleComplete}) => {

  return (
    <div className="flex justify-between items-center bg-indigo-950 text-xs text-white p-2 m-4 rounded-md w-[374px]">

      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : "incompleted"}`}>{task.task}</p>

      <div>
         <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />

         <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className="mr-5 ml-5" />

      </div>
    </div>
  )
} 

export default TodoItem
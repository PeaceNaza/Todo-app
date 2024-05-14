/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import "../Styles/todo.css"

//props from todolist
const TodoItem = ({task, deleteTodo, editTodo}) => {
  //function to toggle the completed state of a todo
 

  return (
    <div className="container flex justify-between items-center bg-indigo-950 text-xs text-white p-2 rounded-md mt-5 lg:ml-4 lg:w-[425px] sm:w-[270px] h-8">

      <div className="edit-todo">
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
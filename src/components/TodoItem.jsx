/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

//props from todolist
const TodoItem = ({task}) => {
  return (
    <div className="flex justify-between items-center bg-indigo-950 text-white p-2 m-4 rounded-md">
      <p>{task.task}</p>
      <div>
         <FontAwesomeIcon icon={faPenToSquare} />
         <FontAwesomeIcon icon={faTrash} className="mr-5 ml-5" />

      </div>
    </div>
  )
} 

export default TodoItem
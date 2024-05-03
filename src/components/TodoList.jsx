import { useState } from "react"
import Form  from "./Form"
import TodoItem from "./TodoItem"
import { v4 as uuidv4 } from "uuid"
uuidv4();

const TodoList = () => {

  const [todos, setTodos] = useState([])
     
    const addTodo = (todo) => {
      setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false }])
      console.log(todos)
    }

  return (
    <div data-theme="valentine" className="mt-20 lg:w-[50%] sm:md:w-[100%] rounded-md">
      <h1 className="text-center font-bold text-2xl mt-3 text-indigo-950 ">Todo Task Manager</h1>
      {/** passing props from todolist to form component */}
      <Form addTodo={addTodo} />
      {/**generate a todo for each value in the state by maping through */}
      {todos.map((todo, index) => {<TodoItem task={todo} key={index} />})}
      
    </div>
  )
}

export default TodoList
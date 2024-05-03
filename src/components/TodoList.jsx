import { useState } from "react"
import Form  from "./Form"
import TodoItem from "./TodoItem"
import { v4 as uuidv4 } from "uuid"
uuidv4();

const TodoList = () => {

  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      task: "Learn React",
      completed: true,
      isEditing: false
    },
    {
      id: uuidv4(),
      task: "Learn Node",
      completed: false,
      isEditing: false
    },
    {
      id: uuidv4(),
      task: "Learn Express",
      completed: false,
      isEditing: false
    }

  ])
     
  //function to add a todo
    const addTodo = (todo) => {
      setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false },])
    } 

    //function to delete a todo
    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
    }  

     //function to toggle the completed state of a todo
     const toggleComplete = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
   }

   // function to edit a todo 
    const editTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    } 

  return (
    <div data-theme="valentine" className="mt-20 lg:w-[50%] sm:md:w-[100%] rounded-md">

      <h1 className="text-center font-bold text-2xl mt-3 text-indigo-950 ">Todo Task Manager</h1>

      {/** passing props from todolist to form component */}
      <Form addTodo={addTodo} />
      {/**generate a todo for each value in the state and display on form by maping through */}
      {todos.map((todo) =>  todo.task && <TodoItem 
      key={todo.id} 
      task={todo} 
      deleteTodo={deleteTodo} 
      editTodo={editTodo} 
      toggleComplete={toggleComplete} 
      />
      )} 
      
    </div>
  )
}

export default TodoList
import { useState } from "react"
import Form  from "./Form"
import TodoItem from "./TodoItem"
import Edit from "./Edit"
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
      if (window.confirm("Are you sure you want to delete this task?")) {
        setTodos(todos.filter(todo => todo.id !== id));
      }
    };

     //function to toggle the completed state of a todo
     
  

   // function to edit a todo 
    const editTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    } 

    //function to edit a task
    const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo)) 
    }

  return ( 
    //todolist container
    <div data-theme="valentine" className=" mt-20 rounded-md pb-7 w-[500px]">

      <h1 className="text-center font-bold lg:text-2xl sm:text-md mt-3 text-indigo-950 ">Todo Task Manager</h1>

      {/** passing props from todolist to form component */}
      <div className="ml-6 ">
          <Form addTodo={addTodo} />
          {/**generate a todo for each value in the state and display on form by maping through */} 
          
          {todos.map((todo) =>  todo.task   && 
          todo.isEditing ?
          <Edit key={todo.id} task={todo} editTodo={editTask} /> :
          <TodoItem 
          key={todo.id} 
          task={todo} 
          deleteTodo={deleteTodo} 
          editTodo={editTodo}  
          />
          )} 
      </div>
      
      
    </div>
  )
}

export default TodoList
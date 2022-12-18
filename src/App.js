import React, {useState, useRef, useEffect } from 'react';  
import ToDoList from './ToDoList';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

const App = () => {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedtodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedtodos) setTodos(storedtodos)
  }, [])
  
  useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]) 

  function toggleToDo(id) {
    const newt = [...todos]
    const todo = newt.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newt)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos=> {
      return [...prevTodos, {id: 1 , name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }
  function handleClearToDos(){
    const nt = todos.filter(todo => !todo.complete)
    setTodos(nt)
  }

  return (
    <>
      <ToDoList todos={todos} toggleToDo={toggleToDo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearToDos}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;

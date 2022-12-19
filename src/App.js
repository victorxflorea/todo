import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList";
import "./main.css";
import todoimg from "./assets/todoimg.png";

const LOCAL_STORAGE_KEY = "todoApp.todos";

const App = () => {
	const todoNameRef = useRef();
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		const storedtodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storedtodos) setTodos(storedtodos);
	}, []);
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);
	function toggleToDo(id) {
		const newt = [...todos];
		const todo = newt.find((todo) => todo.id === id);
		todo.complete = !todo.complete;
		setTodos(newt);
		return;
	}
	function handleAddTodo(e) {
		const name = todoNameRef.current.value;
		if (name.length <= 0 || name === "") return;
		setTodos((prevTodos) => {
			return [...prevTodos, { id: 1, name: name, complete: false }];
		});
		todoNameRef.current.value = null;
		return;
	}
	function handleClearToDos() {
		const nt = todos.filter((todo) => !todo.complete);
		setTodos(nt);
	}
	const size = todos.length;
	const notcompleted = todos.filter((todo) => !todo.complete).length;
	return (
		<div className="page">
			<div>
				<img
					alt="no img"
          className="todoimg"
					src={todoimg}
				/>
				<p className="title">TO-DO LIST</p>
				<p
					className="title"
					style={{ fontSize: "17px" }}
				>
					Made by Florea Victor
				</p>
			</div>
			<div className="controls_wrapper">
				<input
					className="input"
					ref={todoNameRef}
					type="text"
				/>
				<div className="btn_wrapper">
					<button
						className="btn add"
						onClick={handleAddTodo}
					>
						Add Todo
					</button>
					<button
						className="btn clear"
						onClick={handleClearToDos}
					>
						Clear Complete
					</button>
				</div>
			</div>
			<ToDoList
				todos={todos}
				toggleToDo={toggleToDo}
			/>
			<div>
				{notcompleted}/{size} left to do
			</div>
		</div>
	);
};

export default App;

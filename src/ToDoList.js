import React from "react";
import Todo from "./Todo";

export default function ToDoList({ todos, toggleToDo }) {
	return (
		<div className="todo_wrapper">
			{todos.map((todo) => {
				return (
					<Todo
						key={todo.id}
						toggleToDo={toggleToDo}
						todo={todo}
					/>
				);
			})}
		</div>
	);
}

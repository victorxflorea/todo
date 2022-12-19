import React from "react";

export default function Todo({ todo, toggleToDo }) {
	function handleToDoClick() {
		toggleToDo(todo.id);
	}
	return (
		<label className="to-do_wrapper">
			<input
				type="checkbox"
				checked={todo.complete}
				onChange={handleToDoClick}
			/>
			{todo.name}
		</label>
	);
}

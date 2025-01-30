import React, { useState } from "react";

export default function Sidebar({ addTodo }) {
    const [todo, setTodo] = useState("");

    const handleAddTodo = () => {
        if (todo.trim() !== "") {
            addTodo(todo);
            setTodo("");
        }
    };

    return (
        <div className="sidebar">
            <input 
                type="text" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)} 
                placeholder="Another one" 
            />
            <button onClick={handleAddTodo}>Get To It</button>
        </div>
    );
}
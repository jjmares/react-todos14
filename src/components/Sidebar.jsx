export default function Sidebar({ newTodo, setNewTodo, addTodo }) {
    return (
        <div className="sidebar">
            <input 
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
                type="text"
                placeholder="Another one" 
            />
            <button onClick={addTodo}>Get To It</button>
        </div>
    );
}
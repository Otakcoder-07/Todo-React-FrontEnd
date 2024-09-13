import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Buy groceries", priority: "High", dueDate: "2024-09-15", note: "Buy milk and eggs" },
    { id: 2, name: "Complete project", priority: "Medium", dueDate: "2024-09-20", note: "Submit before the deadline" },
  ]);

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Your To-Do List</h2>
      <ul className="space-y-4">
        {todos.map(todo => (
          <li key={todo.id} className="bg-white p-4 rounded shadow-lg">
            <h3 className="text-xl font-semibold">{todo.name}</h3>
            <p>Priority: {todo.priority}</p>
            <p>Due Date: {todo.dueDate}</p>
            <p>{todo.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

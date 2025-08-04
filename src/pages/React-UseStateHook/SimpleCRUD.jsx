import { useState } from "react";

const SimpleCRUD = () => {
  const [todos, setTodos] = useState([
    {
      id: 123456789,
      title: "Bappa Saha Bapi",
    },
    {
      id: 12345678900,
      title: "Partho Saha Bapi",
    },
  ]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editId) {
      // Update the existing todo
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, title: title } : todo
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      // Add new todo
      const newTodo = {
        id: Date.now().toString(),
        title: title,
      };
      setTodos([...todos, newTodo]);
    }

    setTitle(""); // Clear input after submit
  };

  const handleEdit = (todo) => {
    setTitle(todo.title);
    setEditId(todo.id);
  };
  const handleDelete = (todoId) => {
    const deleteTodo = todos.filter((todo) => todo.id !== todoId); // return array
    setTodos(deleteTodo);
  };

  return (
    <div>
      <div>
        <h3>Todo List</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter Text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />{" "}
              <button>{editId ? "Update" : "Add"}</button>
              {/* <button>Submit Todo</button> */}
            </div>
          </form>
        </div>
        <hr />
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <li>
                {todo.title}{" "}
                <button onClick={() => handleEdit(todo)}>Edit</button>{" "}
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleCRUD;

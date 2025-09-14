import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TodoApp() {
  const STORAGE_KEY = "todo-react-app-v1";
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all"); // all | active | completed
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const remaining = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);

  const filtered = useMemo(() => {
    let list = todos;
    if (filter === "active") list = list.filter((t) => !t.completed);
    if (filter === "completed") list = list.filter((t) => t.completed);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((t) => t.text.toLowerCase().includes(q));
    }
    return list;
  }, [todos, filter, query]);

  function addTodo() {
    const value = text.trim();
    if (!value) return;
    setTodos((prev) => [
      { id: uid(), text: value, completed: false, createdAt: Date.now() },
      ...prev,
    ]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function startEdit(todo) {
    setEditingId(todo.id);
    setEditingText(todo.text);
  }

  function saveEdit() {
    if (!editingId) return;
    const value = editingText.trim();
    if (!value) {
      setTodos((prev) => prev.filter((t) => t.id !== editingId));
    } else {
      setTodos((prev) =>
        prev.map((t) => (t.id === editingId ? { ...t, text: value } : t))
      );
    }
    setEditingId(null);
    setEditingText("");
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") addTodo();
  }

  // Style objects
  const container = {
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(to bottom, #f8fafc, #f1f5f9)",
    color: "#0f172a",
    fontFamily: "sans-serif",
  };
  const card = {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    border: "1px solid #e2e8f0",
    padding: "16px",
  };
  const input = {
    flex: 1,
    height: "44px",
    padding: "0 12px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    outline: "none",
  };
  const button = {
    height: "44px",
    padding: "0 20px",
    borderRadius: "8px",
    fontWeight: "500",
    cursor: "pointer",
    border: "none",
  };

  return (
    <div style={container}>
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "40px 16px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>Todo App</h1>
            <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
              A sleek, local-first task list with filters, search, and animations.
            </p>
          </div>
          <div style={{ fontSize: "14px", color: "#64748b" }}>{remaining} left</div>
        </header>

        <div style={{ ...card, marginBottom: "16px" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What needs to be done?"
              style={input}
            />
            <button
              onClick={addTodo}
              style={{ ...button, background: "#4f46e5", color: "#fff" }}
            >
              Add
            </button>
          </div>

          <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              {["all", "active", "completed"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    border: filter === f ? "1px solid #0f172a" : "1px solid #e2e8f0",
                    background: filter === f ? "#0f172a" : "#fff",
                    color: filter === f ? "#fff" : "#334155",
                    cursor: "pointer",
                  }}
                >
                  {f[0].toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tasks…"
              style={{ ...input, height: "40px" }}
            />
          </div>
        </div>

        <main style={{ ...card, padding: 0, overflow: "hidden" }}>
          <AnimatePresence initial={false}>
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ padding: "32px", textAlign: "center", color: "#64748b" }}
              >
                No tasks yet. Add a new one above.
              </motion.div>
            ) : (
              filtered.map((todo) => (
                <motion.div
                  key={todo.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  layout
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    borderBottom: "1px solid #f1f5f9",
                  }}
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "4px",
                      border: "1px solid #cbd5e1",
                      background: todo.completed ? "#10b981" : "#fff",
                      color: todo.completed ? "#fff" : "#000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {todo.completed && (
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: "16px", height: "16px" }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </button>

                  {editingId === todo.id ? (
                    <input
                      autoFocus
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEdit();
                        if (e.key === "Escape") {
                          setEditingId(null);
                          setEditingText("");
                        }
                      }}
                      style={{ ...input, flex: 1, minWidth: 0 }}
                    />
                  ) : (
                    <div
                      style={{
                        flex: 1,
                        minWidth: 0,
                        color: todo.completed ? "#94a3b8" : "#000",
                        textDecoration: todo.completed ? "line-through" : "none",
                      }}
                    >
                      {todo.text}
                    </div>
                  )}

                  {editingId === todo.id ? (
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={saveEdit}
                        style={{ ...button, padding: "6px 12px", background: "#059669", color: "#fff" }}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setEditingId(null);
                          setEditingText("");
                        }}
                        style={{ ...button, padding: "6px 12px", background: "#e2e8f0", color: "#334155" }}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: "flex", gap: "6px" }}>
                      <button
                        onClick={() => startEdit(todo)}
                        style={{ ...button, padding: "4px 8px", border: "1px solid #cbd5e1", background: "#fff", color: "#000" }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeTodo(todo.id)}
                        style={{ ...button, padding: "4px 8px", border: "1px solid #fda4af", background: "#fff", color: "#b91c1c" }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </main>

        <footer style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ fontSize: "14px", color: "#64748b" }}>
            {todos.length} total • {remaining} active • {todos.length - remaining} completed
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={clearCompleted}
              style={{ ...button, padding: "6px 12px", border: "1px solid #cbd5e1", background: "#fff", color: "#334155" }}
            >
              Clear completed
            </button>
            <button
              onClick={() => setTodos([])}
              style={{ ...button, padding: "6px 12px", border: "1px solid #cbd5e1", background: "#fff", color: "#334155" }}
            >
              Reset
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

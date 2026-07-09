import { useState, useEffect } from "react";

export default function Task() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks when page opens
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = () => {
    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  };

  // Delete Task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#3b82f6",
        }}
      >
        📚 Student Task Manager
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Enter a task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "300px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid gray",
            fontSize: "16px",
          }}
        />

        <button
          onClick={addTask}
          style={{
            background: "#3b82f6",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>

      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
        }}
      >
        {tasks.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>No Tasks Yet</h3>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              style={{
                background: "white",
                padding: "18px",
                marginBottom: "15px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <span
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                  color: task.completed ? "green" : "black",
                  fontSize: "18px",
                }}
              >
                {task.title}
              </span>

              <div>
                <button
                  onClick={() => toggleComplete(task.id)}
                  style={{
                    marginRight: "10px",
                    background: task.completed ? "orange" : "green",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
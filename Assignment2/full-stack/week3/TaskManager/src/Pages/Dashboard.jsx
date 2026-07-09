import { useState, useEffect } from "react";
//import Dashboard from "./style/Dashboard.css";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        <div className="card total">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="card pending">
          <h3>Pending</h3>
          <p>{pendingTasks}</p>
        </div>

        <div className="card completed">
          <h3>Completed</h3>
          <p>{completedTasks}</p>
        </div>
      </div>

      <h2>Recent Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-item">
            <h4>{task.title}</h4>
            <p>{task.completed ? "✅ Completed" : "⏳ Pending"}</p>
          </div>
        ))
      )}
    </div>
  );
}
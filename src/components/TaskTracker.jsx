import React, { useState, useEffect } from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";

const TaskTracker = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
    });
    return () => {
      window.removeEventListener("storage", () => {
        setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
      });
    };
  }, []);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Save tasks to local storage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Toggle dark mode and save to local storage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  // Add a new task
  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear all tasks
  const clearTasks = () => setTasks([]);

  return (
    <div
      className={`p-4 transition-all duration-300 rounded-lg shadow-lg w-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-4">📝 Task Tracker</h1>

      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className={`mb-4 px-4 py-2 rounded ${
          darkMode ? "bg-blue-500 text-white" : "bg-gray-800 text-white"
        }`}
      >
        {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
      </button>

      {/* Add Task Form */}
      <AddTaskForm addTask={addTask} darkMode={darkMode} />

      {/* Task List */}
      <div className="mt-4 overflow-auto px-2 h-40">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={() => toggleTask(task.id)}
              onDelete={() => deleteTask(task.id)}
              darkMode={darkMode}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks yet!</p>
        )}
      </div>

      {/* Clear All Button */}
      <div className="mt-6">
        <button
          onClick={clearTasks}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default TaskTracker;

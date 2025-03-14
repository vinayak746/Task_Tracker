import React, { useState } from "react";

const AddTaskForm = ({ addTask, darkMode }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        className={`flex-1 p-2 border rounded ${
          darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
        }`}
      />
      <button
        type="submit"
        className={`px-4 py-2 rounded ${
          darkMode ? "bg-blue-500 text-white" : "bg-gray-800 text-white"
        }`}
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;

import React from "react";

const Task = ({ task, onToggle, onDelete, darkMode }) => {
  if (!task) return null; // Safety check to avoid crashing

  return (
    <div>
      <div
        className={`flex items-center justify-between p-2 mb-2 border rounded ${
          task.completed
            ? "bg-green-200 line-through"
            : darkMode
            ? "dark:bg-gray-700"
            : " bg-white"
        }`}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="cursor-pointer"
        />
        <span
          className={`flex-1 mx-2 ${
            task.completed
              ? darkMode
                ? "text-gray-400 line-through"
                : "text-gray-500 line-through"
              : darkMode
              ? "text-gray-300 "
              : "text-black"
          } transition-all duration-300`}
        >
          {task.text}
        </span>

        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;

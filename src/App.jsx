import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";
import TaskTracker from "./components/TaskTracker";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-2xl flex flex-col gap-6 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6 tracking-wide">
          ✅ Task Manager
        </h1>
        {/* <AddTaskForm /> */}
        <TaskTracker />
        <Task />
      </div>
    </div>
  );
}

export default App;

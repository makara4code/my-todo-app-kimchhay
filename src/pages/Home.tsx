import { useState } from "react";
import { Link } from "react-router-dom";
import TaskInput from "../components/TaskInput";
import TodoItem from "../components/TodoItem";
import { useTasks } from "../contexts/TaskContext";

export default function Home() {
  const { tasks, setTasks } = useTasks();
  const [title, setTitle] = useState("");

  const addTask = () => {
    if (!title.trim()) return;
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">
        Daily Task
      </h1>

      <TaskInput value={title} onChange={setTitle} onAdd={addTask} />

      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            title={task.title}
            completed={task.completed}
            onToggle={() => toggleComplete(task.id)}
          />
        ))}
      </ul>

      <Link to="/completed" className="block mt-4 text-blue-600 underline">
        View Completed Tasks
      </Link>
    </div>
  );
}

import { useTasks } from "../contexts/TaskContext";
import { Link } from 'react-router-dom';

export default function Completed() {
  const { tasks } = useTasks();
  const completed = tasks.filter((task) => task.completed);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
      {completed.length === 0 && <p>No completed tasks yet.</p>}
      <ul>
        {completed.map((task) => (
          <li key={task.id} className="p-2 border-b text-gray-700">
            {task.title}
          </li>
        ))}
      </ul>
      <Link to="/" className="block mt-4 text-blue-600 underline">
        Back to Home
      </Link>
    </div>
  );
}

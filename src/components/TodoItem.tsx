// src/components/TodoItem.tsx
type TodoItemProps = {
    title: string;
    completed: boolean;
    onToggle: () => void;
  };
  
  export default function TodoItem({ title, completed, onToggle }: TodoItemProps) {
    return (
      <li
        className={`flex justify-between items-center p-2 border-b ${
          completed ? 'line-through text-gray-500' : ''
        }`}
      >
        <span>{title}</span>
        <button onClick={onToggle} className="text-sm text-blue-500">
          {completed ? 'Undo' : 'Done'}
        </button>
      </li>
    );
  }
  
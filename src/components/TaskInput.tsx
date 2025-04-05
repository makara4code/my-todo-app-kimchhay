// src/components/TaskInput.tsx
type TaskInputProps = {
    value: string;
    onChange: (value: string) => void;
    onAdd: () => void;
  };
  
  export default function TaskInput({ value, onChange, onAdd }: TaskInputProps) {
    return (
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Add a task"
        />
        <button onClick={onAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
    );
  }
  
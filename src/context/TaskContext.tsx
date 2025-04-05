import { createContext, useState, useContext } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskContext = createContext<any>(null);
export const useTasks = () => useContext(TaskContext);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

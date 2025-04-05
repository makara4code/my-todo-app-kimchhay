import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./Route";
import { TaskProvider } from "./contexts/TaskContext";

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>{useRoutes(routes)}</Suspense>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <AppRoutes />
      </TaskProvider>
    </BrowserRouter>
  );
}

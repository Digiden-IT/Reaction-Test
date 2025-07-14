import { Button } from "antd";
import Dashboard from "./layout/Dashboard";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
      <h1 className="mb-4 text-2xl">Intern Reaction Project</h1>
      <Button type="primary">Test AntD Button</Button>
      <Dashboard></Dashboard>

      <Dashboard></Dashboard>

      <h1>In Progress</h1>
      <h2 className="text-cyan-600"> text Changed</h2>

    </div>
  );
}

export default App;

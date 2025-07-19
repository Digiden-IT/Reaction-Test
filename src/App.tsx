import { Button } from "antd";
import { Link,  } from "react-router";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <h1 className="text-2xl mb-4">Intern Reaction Project</h1>
      <Button type="primary">Test AntD Button</Button>
      <h1>In Progress</h1>
      <h2 className="text-amber-900"> New Changes added</h2>
        
      <Link to="/ticket">
        <Button type="primary" className="mt-4">
          Go to My Tickets
        </Button>
        </Link>
    </div>
  );
}

export default App;

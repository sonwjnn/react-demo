import "./App.css";
import { Counter } from "./components/counter";

function App() {
  return (
    <div className="max-w-[800px] mx-auto flex flex-col gap-y-4">
      <h2 className="text-xl font-bold text-center">Redux Complete Tutorial</h2>
      <Counter />
    </div>
  );
}

export default App;

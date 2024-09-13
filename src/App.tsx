import "./App.css";
import { Counter } from "./components/counter";
import { FirebaseExample } from "./components/firebase-example";

function App() {
  return (
    <div className="max-w-[800px] mx-auto flex flex-col gap-y-4">
      <FirebaseExample />
    </div>
  );
}

export default App;

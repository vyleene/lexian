import "./App.css";
import { useGreetingController } from "./controllers/GreetingController";
import { GreetingView } from "./views/GreetingView";

function App() {
  const controller = useGreetingController();

  return <GreetingView {...controller} />;
}

export default App;

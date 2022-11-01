import "./App.css";
import { Observable, generateData, logger } from "./observable";
import Button from "@ramsey-design-system/button";
import "@ramsey-design-system/button/dist/button.css";
import Stack from "@ramsey-design-system/stack";
import "@ramsey-design-system/stack/dist/stack.css";

function App() {
  const observedObject = new Observable();

  const handleUpdate = () => {
    observedObject.notify(generateData());
  };

  const handleSubscribe = () => {
    if (!observedObject.observers.includes(logger)) {
      observedObject.subscribe(logger);
      console.log("Subscribed");
    } else {
      observedObject.unsubscribe(logger);
      console.log("Unsubscribed");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Stack>
          <Button onClick={handleSubscribe}>
            Subscribe/Unsubscribe Logger
          </Button>
          <Button onClick={handleUpdate}>Update Weather Data</Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;

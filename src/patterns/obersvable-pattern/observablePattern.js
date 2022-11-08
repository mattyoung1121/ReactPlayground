import React from "react";
import { Observable, generateData, logger } from "./observable";
import Button from "@ramsey-design-system/button";
import "@ramsey-design-system/button/dist/button.css";
import Stack from "@ramsey-design-system/stack";
import "@ramsey-design-system/stack/dist/stack.css";

export const ObservablePattern = () => {
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
    <Stack>
      <Button onClick={handleSubscribe}>Subscribe/Unsubscribe Logger</Button>
      <Button onClick={handleUpdate}>Update Weather Data</Button>
    </Stack>
  );
};

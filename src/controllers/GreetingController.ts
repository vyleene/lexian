import { FormEvent, useCallback, useState } from "react";
import { requestGreeting } from "../models/GreetingModel";

export interface GreetingController {
  name: string;
  message: string;
  onNameChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function useGreetingController(): GreetingController {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = useCallback((value: string) => {
    setName(value);
  }, []);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const greeting = await requestGreeting(name);
      setMessage(greeting.message);
    },
    [name],
  );

  return {
    name,
    message,
    onNameChange,
    onSubmit,
  };
}

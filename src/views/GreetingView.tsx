import { FormEvent } from "react";
import reactLogo from "../assets/react.svg";

interface GreetingViewProps {
  name: string;
  message: string;
  onNameChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
}

export function GreetingView({
  name,
  message,
  onNameChange,
  onSubmit,
}: GreetingViewProps) {
  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form className="row" onSubmit={onSubmit}>
        <input
          id="greet-input"
          value={name}
          onChange={(event) => onNameChange(event.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{message}</p>
    </main>
  );
}

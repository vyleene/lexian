import { invoke } from "@tauri-apps/api/core";

export interface GreetingModel {
  name: string;
  message: string;
}

export async function requestGreeting(name: string): Promise<GreetingModel> {
  const message = await invoke<string>("greet", { name });

  return {
    name,
    message,
  };
}

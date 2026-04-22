import { createFileRoute } from "@tanstack/react-router";
import {App} from "./app";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <App />
    </main>
  );
}

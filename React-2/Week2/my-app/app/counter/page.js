import { CounterProvider } from "./CounterContext";
import CounterPage from "./CounterPage";

export default function App() {
  return (
    <CounterProvider>
      <CounterPage />
    </CounterProvider>
  );
}

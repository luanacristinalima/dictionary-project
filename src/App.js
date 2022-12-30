import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="mt-5">
        <a
          href="https://github.com/luanacristinalima/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Luana Lima
      </footer>
    </div>
  );
}

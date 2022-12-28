import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mb-5">
          <h1>Dictionary Project</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="mt-5"> Coded by Luana Lima </footer>
      </div>
    </div>
  );
}

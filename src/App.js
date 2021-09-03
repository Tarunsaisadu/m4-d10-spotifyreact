import logo from "./logo.svg";
import "./App.css";
// import SingleCard from "./components/SingleCard";
import Home from "./pages/Home";
import RowComponent from "./components/RowComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <RowComponent />
      </header>
    </div>
  );
}

export default App;

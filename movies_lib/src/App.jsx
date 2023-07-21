import "./App.css";
import { Outlet } from "react-router-dom";

//components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Movies Lib</h2>
      <Outlet />
    </div>
  );
}

export default App;

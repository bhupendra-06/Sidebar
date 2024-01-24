import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="App">
      <SideBar />
    </div>
  );

}

export default App;

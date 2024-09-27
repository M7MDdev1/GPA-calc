import Menu from "./Pages/Menu/Components/Menu";
import "./App.css";
import Header from "./Pages/Menu/Components/Header/Header";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header title="احسب معدلك" />

      <Routes>
        <Route path="/GPA-calc" element={<Menu />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Home, Saved } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="top" element={<Saved />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

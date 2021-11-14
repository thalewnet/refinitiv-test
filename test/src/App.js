import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./Pages/First";
import Third from "./Pages/Third";
import Second from "./Pages/Second";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

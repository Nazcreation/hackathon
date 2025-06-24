import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Description from "./components/Description";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/recipe/:id" element={<Description />} />
    </Routes>
  );
}

export default App;

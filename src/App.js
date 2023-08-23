import { Route, Routes } from "react-router-dom";
import Home from "./modules/Home";

import Tasks from "./modules/Tasks";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/:id" element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default App;

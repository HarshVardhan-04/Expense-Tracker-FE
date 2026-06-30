import { BrowserRouter, Routes, Route } from "react-router-dom";


import Dashboard from "./pages/Dashboard/dashboard";
import Expense from "./pages/Expense/expense";
import Income from "./pages/Income/income";
import Input from "./pages/Expense/input"

function App() {
  return (
    // <Input />
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/income" element={<Income />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
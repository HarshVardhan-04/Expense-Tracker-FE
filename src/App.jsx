import { BrowserRouter, Routes, Route } from "react-router-dom";


import Dashboard from "./pages/Dashboard/dashboard";
import Expense from "./pages/Expense/expense";
import Income from "./pages/Income/income";
import Input from "./pages/Expense/input";
import Home from "./pages/home.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import Report from "./pages/Reports/report";
import Setting from "./pages/Setting/setting";

function App() {
  return (
    // <Input />
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/dashboard" element={<ProtectedRoute>
                                                  <Dashboard />
                                              </ProtectedRoute>} />
            <Route path="/expense" element={<ProtectedRoute>
                                                  <Expense />
                                              </ProtectedRoute>} />
            <Route path="/income" element={<ProtectedRoute>
                                                  <Income />
                                              </ProtectedRoute>} />
            <Route path="/report" element={<ProtectedRoute>
                                                  <Report />
                                              </ProtectedRoute>} />
            <Route path="/setting" element={<ProtectedRoute>
                                                  <Setting />
                                              </ProtectedRoute>} />
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Dashboard from "./pages/dashboard";
import Analytics from "./pages/Analytics";
import Budgets from "./pages/Budgets";
import Expenses from "./pages/Expenses";
import Reminders from "./pages/Reminders";
import SavingGoals from "./pages/SavingGoals";
import Settings from "./pages/Settings";
import Login from "./pages/login";
import Signup from "./pages/Signup";
function App() {
  return (
    <Router>
      <div className="app-layout">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

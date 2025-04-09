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
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="app-layout">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/saving-goals" element={<SavingGoals />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

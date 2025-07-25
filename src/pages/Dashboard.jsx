import React from 'react';
import './Dashboard.css';
import Navbar from '../components/Navbar';
import ExpenseCharts from '../components/ExpenseCharts';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />

      <div className="dashboard-container">
        <h1>Welcome, {user?.name || 'User'} 👋</h1>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Total Expenses</h3>
            <p>₹12,500</p>
          </div>

          <div className="dashboard-card">
            <h3>This Month</h3>
            <p>₹3,200</p>
          </div>

          <div className="dashboard-card">
            <h3>Remaining Budget</h3>
            <p>₹6,800</p>
          </div>
        </div>

        <div className="dashboard-info">
          <h2>Quick Summary</h2>
          <p>Track your expenses, budget smarter, and stay on top of your finances.</p>
        </div>
        <ExpenseCharts />
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useState } from 'react';
import './Expenses.css';
import Navbar from '../components/Navbar';

function Expenses() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Groceries', amount: 1200, date: '2025-07-15' },
    { id: 2, title: 'Transport', amount: 600, date: '2025-07-17' },
  ]);

  const [newExpense, setNewExpense] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!newExpense.title || !newExpense.amount || !newExpense.date) return;

    const newId = expenses.length ? expenses[expenses.length - 1].id + 1 : 1;
    const expense = { ...newExpense, id: newId };
    setExpenses([...expenses, expense]);
    setNewExpense({ title: '', amount: '', date: '' });
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="expenses-container">
        <h2>Your Expenses</h2>

        <form onSubmit={handleAddExpense} className="expense-form">
          <input
            type="text"
            name="title"
            placeholder="Expense Title"
            value={newExpense.title}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newExpense.amount}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={newExpense.date}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Expense</button>
        </form>

        <table className="expense-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount (₹)</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(exp => (
              <tr key={exp.id}>
                <td>{exp.title}</td>
                <td>{exp.amount}</td>
                <td>{exp.date}</td>
                <td>
                  <button onClick={() => handleDelete(exp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Expenses;

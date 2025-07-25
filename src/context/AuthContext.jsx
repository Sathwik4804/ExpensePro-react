import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on page refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔐 Register function
  const register = async (name, email, password) => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

      const userExists = existingUsers.some((user) => user.email === email);
      if (userExists) throw new Error("User already exists");

      const newUser = {
        _id: Date.now(),
        name,
        email,
        password, // ⚠️ plaintext for now (simulate only)
        role: "user",
      };

      localStorage.setItem(
        "registeredUsers",
        JSON.stringify([...existingUsers, newUser])
      );
    } catch (err) {
      throw err;
    }
  };

  // 🔑 Login function
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) throw new Error("Invalid credentials");

    setUser(foundUser);
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
  };

  // 🚪 Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

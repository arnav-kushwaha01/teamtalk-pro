import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Chat from './pages/Chat.jsx';
import Admin from './pages/Admin.jsx';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const App = () => (
  <AuthProvider>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/chat" />} />
    </Routes>
  </AuthProvider>
);

export default App;
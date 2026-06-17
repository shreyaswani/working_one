import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = ({ children, currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

const ToggleForm = () => {
  const navigate = useNavigate();
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const toggleForm = () => {
    setIsRegisterForm((prev) => {
      const newFormState = !prev;
      navigate(newFormState ? "/register" : "/login"); 
      return newFormState;
    });
  };
  return isRegisterForm ? (
    <Register toggleForm={toggleForm} />
  ) : (
    <Login toggleForm={toggleForm} />
  );
};

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <ToastContainer autoClose={2000} hideProgressBar={true} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/login" 
            element={currentUser ? <Navigate to="/" /> : <ToggleForm />} 
          />
          <Route 
            path="/register" 
            element={currentUser ? <Navigate to="/" /> : <ToggleForm />} 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

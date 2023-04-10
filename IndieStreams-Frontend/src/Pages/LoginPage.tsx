import axios from "axios";
import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const notify = () =>
  toast.error("Incorrect E-Mail or Password", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

interface LoginData {
  email: string;
  password: string;
}

function LoginPage() {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = formData;

    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        if (res.data == false) {
          notify();
        } else {
          localStorage.setItem("loggedIn", "true");
          axios
            .post("http://localhost:3000/user", { email, password })
            .then((res) => {
              localStorage.setItem("user", JSON.stringify(res.data[0]));
            });
          navigate("/");
        }
      });
  };

  useEffect(() => {
    loggedIn == true ? navigate("/") : navigate("/login");
  }, [loggedIn]);

  return (
    <div className="login-container">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-header">Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;

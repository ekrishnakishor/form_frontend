import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/login.css";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/login/`,
        {
          username,
          password,
        }
      );
      const { access, refresh } = response.data;

    

      localStorage.setItem("token", access);
      localStorage.setItem("refresh_token", refresh);
      navigate("/admin");
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div className="main-container-login">
      <div className="login-container">
        <h2>
          Sign in <VpnKeyIcon />
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Email Address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="login-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

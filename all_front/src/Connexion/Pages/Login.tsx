import React, { useState } from "react";
import "../Assets/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await login(username, password);
      if (success) {
        navigate("/SpaceUser");
      } else {
        setError("Identifiants incorrects");
      }
    } catch (err) {
      setError("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container fade-in">
      <div className="left-panel slide-left">
        <Link to='/'>
        <div className="welcome-text">
          <h2>Bonjour!</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        </Link>
      </div>

      <div className="right-panel slide-right">
        <h2 className="title">Se connecter</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Mot de passe</label>
          <div className="password-input">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye">👁</span>
          </div>

          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Connexion..." : "Se connecter"}
          </button>

          <div className="options">
            <a href="#">Mot de passe oublier?</a>
          </div>

          <div className="divider">
            <span>ou connecter avec</span>
          </div>

          <div className="social-buttons">
            <button className="google" type="button">Google</button>
            <button className="facebook" type="button">Facebook</button>
          </div>

          <p className="signup-text">
            Vous n'avez pas encore du compte?<br />
            <Link to="/connect/register" className="signup-btn">S'inscrire</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

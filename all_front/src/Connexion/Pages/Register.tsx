import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../Assets/Register.scss'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await register(username, email, password);
      if (success) {
        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        navigate('/connect/');
      } else {
        setError('Erreur lors de l\'inscription');
      }
    } catch (err) {
      setError('Erreur lors de l\'inscription');
    } finally {
      setLoading(false);
    }
  };

 return (
    <div className="register-container fade-in">
      <div className="left-panel slide-left">
        <div className="welcome-text">
          <h2>Bonjour!</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>

      <div className="right-panel slide-right">
        <h2 className="title">S'inscrire</h2>

        <form onSubmit={handleSubmit} className="register-form">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Inscription..." : "S'inscrire"}
          </button>

          {/* <div className="options">
            <a href="#">Mot de passe oublier?</a>
          </div> */}

          <div className="divider">
            <span>ou s'inscrire avec</span>
          </div>

          <div className="social-buttons">
            <button className="google">Google</button>
            <button className="facebook">Facebook</button>
          </div>

          <p className="signup-text">
            Vous avez déjà un compte?<br />
            <Link to="/connect/" className="signup-btn">Se connecter</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
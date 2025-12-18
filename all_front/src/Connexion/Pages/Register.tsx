import React, { useState } from 'react';
import '../Assets/Register.scss'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoute l'utilisateur en attente de validation
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: any) => u.email === email)) {
      alert('Cet email existe déjà');
      return;
    }
    users.push({ name, email, password, status: 'pending' });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Inscription réussie ! .');
    window.location.href = '/login';
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
          <label>Nom de famille</label>
          <input type="text" name="" id="" 
          //placeholder='nom de famille...' required
          />

          <label>Prenom</label>
          <input type="text" 
          //placeholder='votre nom....' required
          />

          <label>Email ou numéro de téléphone</label>
          <input
            type="email"
            required
           // placeholder='email ou téléphone.....'
          />

          <label>Mot de passe</label>
          <div className="password-input">
            <input
              type="password"
              required
              //placeholder='créer votre mot de passe......'
            />
            <span className="eye">👁</span>
          </div>

          <button type="submit" className="register-btn">
            S'inscrire
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
            <a href="/connect/" className="signup-btn">Se connecter</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
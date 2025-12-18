import React, { useState } from "react";
import "../Assets/Login.scss";
import { Link } from "react-router-dom";

// const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

const Login = () => {

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

        <form  className="login-form">
          <label>Email ou numéro de téléphone</label>
          <input
            type="email"
            
            
            required
          />

          <label>Mot de passe</label>
          <div className="password-input">
            <input
              type="password"
             
              required
            />
            <span className="eye">👁</span>
          </div>

         

          <button type="submit" className="login-btn" >
            Se connecter
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
            <a href="/connect/register" className="signup-btn">S'inscrire</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

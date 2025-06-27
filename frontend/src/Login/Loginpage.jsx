import React from 'react';


export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
      <div className="title">
          <h1 className="login-title" style={{color:'red'}}>Book Nest</h1><br />
        <p className="login-subtitle" style={{color:'black'}}>Log in to your dashboard</p>
      </div>

        <form className="login-form">
          <div className="form-group">
            <label>Email</label><br />
            <input type="email" placeholder="you@example.com" required /><br /><br />
          </div>

          <div className="form-group">
            <label>Password</label><br />
            <input type="password" placeholder="••••••••" required />
          </div><br />

          <button type="submit" className="login-button">Log In</button>
        </form>

        <p className="login-footer">
          Don't have an account? <span className="login-link">Sign up</span>
        </p>
      </div>
    </div>
  );
}

import React from "react";

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please enter both username/email and password.");
      return;
    }

    alert("Logging in…");
  };

  const goToRegister = () => {
    alert("Redirecting to registration page...");
  };

  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 10;
          padding: 0;
        }

        .form-box {
          margin-top: 30px;
          width: 45%;
          max-width: 420px;
          background: #f2f2f2;
          border-radius: 15px;
          padding: 35px 25px 40px 25px;
          position: relative;
          overflow: hidden;
        }

        .form-box::before {
          content: "";
          background: url("logo.png") no-repeat center;
          background-size: 90%;
          opacity: 0.12;
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .main-logo img {
          width: 150px;
          display: block;
          margin: 50px auto -50px auto;
        }

        .main-logo p {
          text-align: center;
          font-weight: bold;
          font-size: 14px;
        }

        h2 {
          margin-top: -10px;
          margin-bottom: 10px;
          color: #333;
          text-align: left;
          padding-left: 10px;
        }

        input {
          width: 85%;
          padding: 10px;
          margin: 10px auto;
          display: block;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 14px;
        }

        .forgot-link {
          text-decoration: underline;
          color: #4a90e2;
          text-align: center;
          display: block;
          margin: 5px 0 15px 0;
          font-size: 13px;
        }

        .btn-login {
          background-color: #2d3748;
          color: white;
          border: none;
          border-radius: 10px;
          padding: 12px 0;
          width: 60%;
          cursor: pointer;
          font-size: 16px;
          display: block;
          margin: 0 auto;
        }

        .register-bar {
          background: #0a8d71;
          color: white;
          padding: 12px 0;
          width: 90%;
          border-radius: 12px;
          text-align: center;
          margin: 20px auto 60px auto;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
        }
      `}</style>

      <div className="main-logo">
        <img src="logo.png" alt="Yesterday Stories Logo" />
      </div>

      <div className="form-box">
        <h2>Sign In</h2>

        <form id="loginForm" onSubmit={handleSubmit}>
          <input type="text" id="username" placeholder="Enter Username / Email" />
          <input type="password" id="password" placeholder="Enter Password" />

          <a href="#" className="forgot-link">Forgot your password?</a>

          <button type="submit" className="btn-login">Login</button>
        </form>

        <div className="register-bar" onClick={goToRegister}>
          Don't have an account yet?
        </div>
      </div>
    </>
  );
}
import React from "react";
import './index.css'
//require('dotenv').config();

export default function Register() {
  //const REACT_APP_steamWebKey = {process.env.REACT_APP_STEAM_WEB_API_KEY}

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const steamIdHandler = (e) => {
    setSteamId(e.target.value)
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    
    const registeruser = async () => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          steam_id: steamId,
          password: password
        }),
      };

      const res = await fetch("http://localhost:4000/users/register", options);

      if (res.ok) {
        console.log(`You have successfully signed up ${username}`);
        window.location.assign("/login");
      } else {
        console.log("error in signup");
      }
    };

    if (password !== confirmPassword) {
      alert("Your passwords do not match");
    } else {
      registeruser();
    }
  }

  return (
    <div className="d-flex mb-5 flex-column" id="register-page">
      <h1 className="logo-title mb-5">Achievement</h1>
      <h2 className="mb-3">Register</h2>
      <form className="d-flex flex-column">
        <input onChange={usernameHandler} type="text" placeholder="Username" className="mt-4 form-entry"></input>
        <input onChange={steamIdHandler} type="text" placeholder="Steam ID" className="mt-2 form-entry"></input>
        <input onChange={passwordHandler} type="password" placeholder="Password" className="mt-2 form-entry"></input>
        <input onChange={confirmPasswordHandler} type="password" placeholder="Confirm Password" className="mt-2 form-entry"></input>
        <input onChange={emailHandler} type="email" placeholder="Email" className="mt-2 form-entry"></input>
       <button type="submit" onClick={handleSubmit} className="mt-2 form-entry form-submit" >
          Submit
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Login Here</a>
      </p>
    </div>
  );
}

import React, { useState } from "react";
import './index.css'
import { user } from "../../context";

export default function Register() {
  const { username, setUsername, email, setEmail, password, setPassword, steamId, setSteamId } = user();
  const [confirmPassword, setConfirmPassword] = useState('');

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
          steam_id: steamId,
          username: username,
          password: password
        }),
      };
      //console.log(steamId, username, password)
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
      <h1 className="logo-title mb-5">Perfectionist</h1>
      <h2 className="mb-3">Register</h2>
      <form className="d-flex flex-column align-items-center">
        <input onChange={usernameHandler} type="text" placeholder="Username" className="mt-4 form-entry"></input>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-question"></i></button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">Getting your Steam ID</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-black">
              1. Open your Steam Community Profile
              <hr />
              2. Click Edit Profile
              <hr />
              If you've never set a custom Steam Community URL for your account, your 64 bit ID will will be shown in the URL under the CUSTOM URL box in the format 76561198#########
              <hr />
              If you have set a custom URL for your account, you can delete the text in the CUSTOM URL box to see your account's 64 bit ID in the URL listed below. 
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <input onChange={steamIdHandler} type="text" placeholder="Steam ID" className="mt-2 form-entry"></input>
        <input onChange={passwordHandler} type="password" placeholder="Password" className="mt-2 form-entry"></input>
        <input onChange={confirmPasswordHandler} type="password" placeholder="Confirm Password" className="mt-2 form-entry"></input>
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

import React from "react";

export default function Login() {
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const loginUser = async () => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ steam_id, username, password }),
      };

      const res = await fetch("http://localhost:4000/users/login", options);
      const data = await res.json();
      setUser_id(data.userid);
      setUsername(data.username);
    };

    loginUser();
  }

  return (
    <div className="d-flex mb-5 flex-column" id="login-page">
      <h1 className="logo-title mb-5">Achievements</h1>
      <h2 className="mb-5">Login</h2>
      <form className="d-flex justify-content flex-column">
        <input onChange={emailHandler} type="email" placeholder="Email" className="mt-2 form-entry"></input>
        <input onChange={passwordHandler} type="password" placeholder="Password" className="mt-2 form-entry"></input>
        <button type="submit" onClick={handleSubmit} className="mt-2 form-entry form-submit">
          Submit
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register Here</a>
      </p>
    </div>
  );
}

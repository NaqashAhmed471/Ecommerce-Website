import React, { useState } from "react";
import style from "./Form.module.css";

const Form = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className={style.form_wrapper}>
    
    <form onSubmit={submitHandler}>
    <div className="d-flex flex-column">
        <h3> Credentials for chechking purpose</h3>
        <h5> Naqash Ahmed</h5>
        <h5> admin@gmail.com</h5>
        <h5> admin123</h5>
      </div>
      <div className={style.form_inner}>
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className={style.form_group}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={details.name}
            onChange={handleChange}
          />
        </div>
        <div className={style.form_group}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={details.email}
            onChange={handleChange}
          />
        </div>
        <div className={style.form_group}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={details.password}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </div>
    </form>
    </div>
  );
};

export default Form;

import React from "react";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, type, value, checked } = e.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
            </label>
        <label>
          Remember me:
          <input
            type="checkbox"
            name="remember"
            value={data.remember}
            onChange={handleChange}
            checked={false}
          />
        </label>
      </form>
    </>
  );
}
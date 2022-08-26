import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import NotFound from "./NotFound";
import { GithubUserList } from "./GitUserList";

export default function App() {
  const navigate = useNavigate();

  const [usernameValue, setUsernameValue] = useState();

  const handleNavigate = () => {
    navigate(`/users/${usernameValue}`);
  };

  return (
    <div>
      <ul style={{ display: "flex", listStyleType: "none", gap: "40px" }}>
        <li>
          <Link to={"/"}>WELCOME</Link>
        </li>
        <li>
          <Link to={"/counter"}>COUNTER</Link>
        </li>
        <li>
          <Link to={"/users"}>USERS</Link>
        </li>
        <li>
          <input
            type="text"
            onKeyUp={(e) => setUsernameValue(e.target.value)}
          />
          <button onClick={handleNavigate}  >
            USERNAME
          </button>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Welcome name="Tiziano" />}/>
        <Route path="counter" element={<Counter />}/>
        <Route path="users" element={<GithubUserList />}>

          <Route index element={<h4>Add a user and select it</h4>}/>
          <Route path=":username" element={<ShowGithubUser />}/>

        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
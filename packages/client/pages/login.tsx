import { useState } from "react";
import * as Etebase from "etebase";

const Login = ({ account, setAccount }: any) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setAccount(
      await Etebase.Account.login(name, password, "http://172.17.0.1:8000")
    );
  };

  if (account === null) {
    return (
      <>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button onClick={handleLogin}>Login</button>
      </>
    );
  } else {
    return (
      <>
        <div>Logged in as {account.user.username}</div>
        <button onClick={() => setAccount(null)}>Logout</button>
      </>
    );
  }
};

export default Login;

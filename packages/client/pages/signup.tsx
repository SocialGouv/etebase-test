import { useState } from "react";
import * as Etebase from "etebase";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const etebase = await Etebase.Account.signup(
      {
        username: name,
        email,
      },
      password,
      "http://172.17.0.1:8000"
    );
    console.log(etebase);
  };

  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={name}
        name="name"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        value={email}
        name="email"
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <button onClick={handleSignup}>Sign up</button>
    </>
  );
};

export default Signup;

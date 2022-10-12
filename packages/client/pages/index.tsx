import type { NextPage } from "next";
import { useState } from "react";
import * as Etebase from "etebase";
import Login from "./login";

const Home: NextPage = () => {
  const [account, setAccount] = useState<Etebase.Account | null>(null);
  const [type, setType] = useState("");
  const [id, setId] = useState("");

  const fetchByType = async () => {
    console.log(await account?.getCollectionManager().list(type));
  };

  const fetchById = async () => {
    console.log(await account?.getCollectionManager().fetch(id));
  };

  return (
    <>
      <Login account={account} setAccount={setAccount}></Login>

      <div>
        <label htmlFor="fetchByType">collection type:</label>
        <input
          type="text"
          name="fetchByType"
          onChange={(event) => setType(event.target.value)}
          value={type}
        ></input>
        <button onClick={fetchByType}>Fetch by type</button>
      </div>

      <div>
        <label htmlFor="fetchById">UID:</label>
        <input
          type="text"
          name="fetchById"
          onChange={(event) => setId(event.target.value)}
        ></input>
        <button onClick={fetchById}>Fetch by ID</button>
      </div>
    </>
  );
};

export default Home;

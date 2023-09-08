import React, { useEffect, useState } from "react";
import axios from "axios";

const Sellers = () => {
  const [name, setName] = useState("");
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setSellers(res.data));
  }, []);

  return (
    <>
      <h3>Admin Sellers Page</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {sellers.map((seller) => (
        <p key={seller.id}>{seller.name}</p>
      ))}
    </>
  );
};

export default Sellers;

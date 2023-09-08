import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../common/Loader";

const Sellers = () => {
  const [name, setName] = useState("");
  const [sellers, setSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setSellers(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h3>Admin Sellers Page</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {isLoading && <Loader />}
      {sellers.map((seller) => (
        <p key={seller.id}>{seller.name}</p>
      ))}
    </>
  );
};

export default Sellers;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../common/Loader";

const Sellers = () => {
  const [name, setName] = useState("");
  const [sellers, setSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    // fetchSellers();
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setSellers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors(err.message);
      });
  }, []);

  // const fetchSellers = async () => {
  //   setIsLoading(true);
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //     setSellers(res.data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setIsLoading(false);
  //     setErrors(err.message);
  //   }
  // };

  const addSeller = () => {
    const newSeller = {
      name,
      id: sellers.length + 1,
    };
    setSellers([newSeller, ...sellers]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newSeller)
      .then((res) => setSellers([res.data, ...sellers]))
      .catch((err) => {
        setErrors(err.message);
        setSellers(sellers);
      });
  };

  return (
    <>
      <h3>Admin Sellers Page</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={addSeller}>Add Seller</button>
      {isLoading && <Loader />}
      {errors && <em>{errors}</em>}
      {sellers.map((seller) => (
        <p key={seller.id}>{seller.name}</p>
      ))}
    </>
  );
};

export default Sellers;

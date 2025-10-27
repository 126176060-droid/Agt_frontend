// components/Add.jsx
import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [sale, setSale] = useState({
    id: "",
    product: "",
    volume: "",
    pricePerLiter: "",
    customer: "",
  });
  const [msg, setMsg] = useState(null);

  const handlePost = async () => {
    // basic validation
    if (!sale.id || !sale.product || !sale.volume || !sale.pricePerLiter) {
      setMsg("Please fill id, product, volume and pricePerLiter");
      return;
    }
    try {
      const payload = {
        id: parseInt(sale.id),
        product: sale.product,
        volume: parseFloat(sale.volume),
        pricePerLiter: parseFloat(sale.pricePerLiter),
        customer: sale.customer || undefined,
      };
      const resp = await axios.post("http://localhost:3000/sales", payload);
      setMsg(resp.data.msg || "Sale added");
      setSale({ id: "", product: "", volume: "", pricePerLiter: "", customer: "" });
    } catch (e) {
      console.error(e);
      setMsg(e.response?.data?.msg || e.message);
    }
  };

  return (
    <>
      <h1>Add New Sale</h1>
      <input
        type="number"
        value={sale.id}
        onChange={(e) => setSale({ ...sale, id: e.target.value })}
        placeholder="Sale ID"
      />
      <br />
      <input
        type="text"
        value={sale.product}
        onChange={(e) => setSale({ ...sale, product: e.target.value })}
        placeholder="Product (e.g., Diesel)"
      />
      <br />
      <input
        type="number"
        step="0.01"
        value={sale.volume}
        onChange={(e) => setSale({ ...sale, volume: e.target.value })}
        placeholder="Volume (liters)"
      />
      <br />
      <input
        type="number"
        step="0.01"
        value={sale.pricePerLiter}
        onChange={(e) => setSale({ ...sale, pricePerLiter: e.target.value })}
        placeholder="Price per liter"
      />
      <br />
      <input
        type="text"
        value={sale.customer}
        onChange={(e) => setSale({ ...sale, customer: e.target.value })}
        placeholder="Customer (optional)"
      />
      <br />
      <button onClick={handlePost}>Add Sale</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Add;

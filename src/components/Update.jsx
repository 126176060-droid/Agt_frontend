// components/Update.jsx
import React, { useState } from "react";
import axios from "axios";

function Update() {
  const [sale, setSale] = useState({
    id: "",
    product: "",
    volume: "",
    pricePerLiter: "",
    customer: "",
  });
  const [msg, setMsg] = useState(null);

  const handlePut = async () => {
    if (!sale.id) {
      setMsg("Please provide Sale ID to update");
      return;
    }
    // prepare payload with only provided fields
    const payload = {};
    if (sale.product) payload.product = sale.product;
    if (sale.volume) payload.volume = parseFloat(sale.volume);
    if (sale.pricePerLiter) payload.pricePerLiter = parseFloat(sale.pricePerLiter);
    if (sale.customer) payload.customer = sale.customer;

    try {
      const resp = await axios.put(`http://localhost:3000/sales/${sale.id}`, payload);
      setMsg(resp.data.msg || "Sale updated");
    } catch (e) {
      console.error(e);
      setMsg(e.response?.data?.msg || e.message);
    }
  };

  return (
    <>
      <h1>Update Sale</h1>

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
        placeholder="Product (leave blank to keep)"
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
        placeholder="Customer"
      />
      <br />
      <button onClick={handlePut}>Update</button>

      {msg && <p>{msg}</p>}
    </>
  );
}

export default Update;
